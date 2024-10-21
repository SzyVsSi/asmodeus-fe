import { useState } from "react";
import signatureJohnDoe from "../../../assets/photos/signaturejohndoe.png";
import signatureTrustee from "../../../assets/photos/signaturetrustee.png";

const RoomOne = () => {
	const [showInput, setShowInput] = useState(false);
	const [userInput, setUserInput] = useState("");
	const [resultMessage, setResultMessage] = useState("");

	const handleExpireClick = () => {
		setShowInput(true);
	};

	const handleInputChange = (e) => {
		setUserInput(e.target.value);
	};

	const checkInput = () => {
		if (userInput === "test") {
			setResultMessage("Correct input!");
		} else {
			setResultMessage("Incorrect input. Try again.");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-900 p-4">
			<div className="bg-gray-800 shadow-2xl rounded-lg p-12 max-w-4xl border-4 border-gray-700">
				<h1
					className="text-5xl font-extrabold text-center mb-8 underline text-red-500"
					style={{ fontFamily: "'Special Elite', cursive" }}
				>
					Deed of Trust
				</h1>

				<p
					className="text-lg text-gray-300 mb-6 leading-relaxed"
					style={{ fontFamily: "'Special Elite', cursive" }}
				>
					THIS DEED, made this{" "}
					<span className="font-bold text-red-400">20th</span> day of
					<span className="font-bold text-red-400"> October</span>,{" "}
					<span className="font-bold text-red-400">2024</span>, by{" "}
					<span className="font-bold text-red-400">John Doe</span>, hereinafter
					referred to as the "Grantor", and{" "}
					<span className="font-bold text-red-400">
						Acme Land Title Company
					</span>
					, as trustee, hereinafter referred to as the "Trustee".
				</p>

				<p
					className="text-lg text-gray-300 mb-6 leading-relaxed"
					style={{ fontFamily: "'Special Elite', cursive" }}
				>
					WITNESSETH: That for and in consideration of the sum of{" "}
					<span className="font-bold text-red-400">$500,000</span> paid by{" "}
					<span className="font-bold text-red-400">John Smith</span>, the
					"Beneficiary," the Grantor does hereby transfer, convey, and assign
					unto the Trustee, in trust, all that certain property situated in the
					County of
					<span className="font-bold text-red-400">Orange</span>, State of{" "}
					<span className="font-bold text-red-400">California</span>, described
					as follows:
				</p>

				<p
					className="italic text-lg text-gray-500 mb-6 border-l-4 border-red-500 pl-4"
					style={{ fontFamily: "'Special Elite', cursive" }}
				>
					Lot 12, Block 9, in the Subdivision known as "Sunshine Meadows,"
					according to the official plat recorded in the Public Records of
					Orange County, California.
				</p>

				<p
					className="text-lg text-gray-300 mb-6 leading-relaxed"
					style={{ fontFamily: "'Special Elite', cursive" }}
				>
					TO HAVE AND TO HOLD the said property, together with all appurtenances
					thereunto belonging, unto the Trustee and its successors forever, in
					trust for the benefit of the Beneficiary, to secure the payment of the
					sum of money as stated in the Promissory Note dated the 20th day of
					<span className="font-bold text-red-400"> October</span>,{" "}
					<span className="font-bold text-red-400">2024</span>.
				</p>

				<p
					className="text-lg text-gray-300 mb-6 leading-relaxed"
					style={{ fontFamily: "'Special Elite', cursive" }}
				>
					Should the Grantor{" "}
					<button
						type="button"
						onClick={handleExpireClick}
						className="font-bold text-red-400"
					>
						expire
					</button>{" "}
					before the terms of this agreement are fulfilled, the property and all
					its claims shall transfer to the Trustee in full.
				</p>

				{showInput && (
					<div className="mt-6 flex flex-col items-center">
						<input
							type="text"
							className="border border-gray-500 rounded-lg p-2 bg-gray-700 text-gray-300 mb-4"
							placeholder="Enter your input"
							value={userInput}
							onChange={handleInputChange}
							style={{ fontFamily: "'Special Elite', cursive" }}
						/>
						<button
							type="button"
							onClick={checkInput}
							className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-700"
							style={{ fontFamily: "'Special Elite', cursive" }}
						>
							Check
						</button>
					</div>
				)}

				{resultMessage && (
					<p
						className={`mt-4 text-lg text-center ${resultMessage === "Correct input!" ? "text-green-500" : "text-red-500"}`}
						style={{ fontFamily: "'Special Elite', cursive" }}
					>
						{resultMessage}
					</p>
				)}

				<div className="flex justify-between items-center mt-12">
					<div className="text-center">
						<img
							src={signatureJohnDoe}
							alt="John Doe's Signature"
							className="h-16 mb-2 mx-auto opacity-75"
						/>
						<p className="underline text-gray-400">_________________________</p>
						<p
							className="text-red-500"
							style={{ fontFamily: "'Special Elite', cursive" }}
						>
							John Doe
						</p>
						<p
							className="text-sm text-gray-500"
							style={{ fontFamily: "'Special Elite', cursive" }}
						>
							Grantor
						</p>
					</div>
					<div className="text-center">
						<img
							src={signatureTrustee}
							alt="Trustee's Signature"
							className="h-16 mb-2 mx-auto opacity-75"
						/>
						<p className="underline text-gray-400">_________________________</p>
						<p
							className="text-red-500"
							style={{ fontFamily: "'Special Elite', cursive" }}
						>
							Trustee's Representative
						</p>
						<p
							className="text-sm text-gray-500"
							style={{ fontFamily: "'Special Elite', cursive" }}
						>
							Trustee
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoomOne;
