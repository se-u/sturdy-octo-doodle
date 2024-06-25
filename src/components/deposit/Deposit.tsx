import { QrCode } from "@modules/Image";
import { path } from "@modules/constant";
import { Link } from "react-router-dom";

export default function Deposit() {
  return (
    <>
      <div className=" h-full space-y-16">
        <div className="text-center">
          <h1 className="text-green text-3xl font-bold">Deposit Botol</h1>
          <p className="font-medium text-xs">
            Tunjukan QR Code dibawah ini ke Volunteer
          </p>
        </div>
        <div className="border-8 rounded-2xl bg-green border-black p-3">
          <img
            src={QrCode}
            alt="qrCode"
            className="border-8 border-black rounded-2xl"
          />
        </div>
        <Link to={path.HOME}>
        <button className="font-extrabold text-center border-4 mt-20 border-black w-full text-xl bg-green py-3 text-white rounded-xl">
          Selesai
        </button>
        </Link>
      </div>
    </>
  );
}
