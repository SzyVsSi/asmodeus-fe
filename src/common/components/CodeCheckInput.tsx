import type { ApiRoom } from '@/core/api/types';
import type { Routes } from '@/core/router/routes';
import { gameSessionsModule } from '@/core/services/apiInitializer';
import { SessionStorageService } from '@/util/sessionStorage';
import clsx from 'clsx';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type Inputs = {
	code: string;
};

type Props = {
	room: ApiRoom;
	to: Routes;
	formClassName?: string;
	inputClassName?: string;
	buttonClassName?: string;
	placeholder?: string;
};

export const CodeCheckForm = ({
	room,
	to,
	formClassName,
	inputClassName,
	buttonClassName,
	placeholder,
}: Props) => {
	const { useCheckCode } = gameSessionsModule;
	const navigate = useNavigate();
	const { checkCode, isPending } = useCheckCode();
	const { register, handleSubmit } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async ({ code }) => {
		const token = SessionStorageService.getItem('token');
		if (!token) return;
		await checkCode({ code, room, token });
		SessionStorageService.setItem(room, 'true');
		navigate(to);
	};

	return (
		<form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
			<input
				type='text'
				className={inputClassName}
				placeholder={placeholder}
				{...register('code', { required: true })}
			/>
			<button
				type='submit'
				className={clsx(buttonClassName, {
					'opacity-50': isPending,
					'cursor-not-allowed': isPending,
				})}
			>
				{isPending ? 'Checking...' : 'Check'}
			</button>
		</form>
	);
};
