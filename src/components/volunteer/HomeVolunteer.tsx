import { BlueReceiveIcon, ReceiveIcon, ScanIcon } from "@modules/Image";
import { Link } from "react-router-dom";

export default function HomeVolunteer() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="border-4 rounded-2xl  border-gray-500 bg-slate-100">
          <div className="text-center flex flex-col  justify-center">
            <img src={ScanIcon} alt="Scan Icon" className="px-16 pt-8" />
            <div className="py-4 ">
              <h1 className="text-green text-2xl font-bold">Scan QR Code</h1>
              <p className="font-medium">Pindai untuk dapatkan ID user</p>
            </div>
            <div className="px-2 py-2">
              <button className="bg-green w-full border-4 text-xl py-3 border-black text-white font-bold rounded-2xl">
                Scan Now
              </button>
            </div>
          </div>
        </div>

        {/* Riwayat Transaksi Start */}
        <div className="bg-green-200 border-2 border-black p-4 mb-4 rounded-3xl">
          <div className="flex justify-between">
            <h2 className="text-medium font-bold text-black">
              Riwayat Transaksi
            </h2>
            <Link
              to="/app/transaction"
              className="py-1 px-3 border-2 items-center border-black rounded-full text-xs font-bold bg-green text-white"
            >
              Lihat semua
            </Link>
          </div>
          {/* Data Transaction */}
          <div className="mt-5 py-2">
            <div className="flex border-black justify-between  items-center pb-2 ">
              <div className="flex flex-row gap-2  items-center">
                <img src={ReceiveIcon} alt="tes" className="h-10" />
                <span className="font-medium text-lg">Poin Klora</span>
              </div>
              <span className="font-semibold text-lightgray text-medium">
                + 50 Poin
              </span>
            </div>

            <div className="flex border-black justify-between  items-center pb-2 ">
              <div className="flex flex-row gap-2  items-center cursor-pointer">
                <img src={BlueReceiveIcon} alt="tes" className="h-10" />
                <span className="font-medium text-lg">Dana</span>
              </div>
              <span className="font-semibold text-lightgray text-medium">
                -Rp64.000
              </span>
            </div>

            <div className="flex border-black justify-between  items-center pb-2 ">
              <div className="flex flex-row gap-2  items-center">
                <img src={BlueReceiveIcon} alt="tes" className="h-10" />
                <span className="font-medium text-lg">Dana</span>
              </div>
              <span className="font-semibold text-lightgray text-medium">
                -Rp64.000
              </span>
            </div>
          </div>
        </div>
        {/* Riwayat Transaksi End */}
      </div>
    </>
  );
}
