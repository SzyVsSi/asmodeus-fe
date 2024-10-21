/*
import { Layout } from '../../common/components/layout/Layout';
import { gameSessionsModule } from '../../core/services/apiInitializer';
const HomePage = () => {
  const { useGetAllGameSessions } = gameSessionsModule;
  const { data, isLoading } = useGetAllGameSessions();

  return (
    <Layout>
      <div className='flex flex-col gap-2'>
        {isLoading && <p className='text-lg'>Loading...</p>}
        {data?.map((gameSession) => (
          <p key={gameSession.token} className='text-lg'>
            {gameSession.token}, room one active:
            {String(gameSession.getRoomStatus('one'))}
          </p>
        ))}
      </div>
    </Layout>
  );
};*/

import { gameSessionsModule } from '../../core/services/apiInitializer';
import { useState, startTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../core/router/routes';

const HomePage = () => {
  const { useVerifyCode } = gameSessionsModule;
  const { verifyCode, error, isPending } = useVerifyCode();
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await verifyCode(inputValue);

    if (error) {
      return
    }

    navigate(Routes.RoomOne)
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      {error && <p>Invalid code</p>}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border p-1"
        placeholder="Enter token"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="mt-2 p-1 border bg-gray-100"
      >
        Submit
      </button>
    </div>
  );
};

export default HomePage;

