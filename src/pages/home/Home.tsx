import { Link } from "react-router-dom";
import {
  BlueReceiveIcon,
  DanaIcon,
  GopayIcon,
  OvoIcon,
  ReceiveIcon,
  convertCoin,
} from "../../components/Image";

export default function Home() {
  return (
    <>
      {/* Statistic Start */}
      <div className="bg-green-200 border-2 border-black p-4 mb-4 rounded-xl flex justify-between">
        <div className="">
          <h2 className="text-sm font-bold text-black ">Klora Point</h2>
          <p className="text-gray-700 text-sm">
            <span className="text-lg font-bold">100</span> Point
          </p>
          <h2 className="text-sm font-bold text-black mt-2">Total Botol</h2>
          <p className="text-gray-700 text-sm">
            <span className="text-lg font-bold">20</span> Botol
          </p>
        </div>
        <div className="">
          <img
            src="/bags/1.png"
            className="rounded-xl shadow-md"
            alt="Tas"
            width={125}
          />
        </div>
      </div>
      {/* Statistic End */}

      {/* Menu */}
      <div className="py-3 mb-4">
        <div className="grid grid-cols-4 gap-3 bg-white ">
          <div className="flex flex-col items-center">
            <div className="grid bg-green  rounded-xl p-2">
              <img src={convertCoin} alt="" className="" />
            </div>
            <span className="text-xs font-semibold  mt-2">Klora Coin</span>
          </div>
          <div className="flex flex-col items-center">
            <div className=" border-black bg-secondary rounded-xl p-2">
              <img src={GopayIcon} alt="tes" className="" />
            </div>
            <span className="text-xs font-semibold mt-2 ">GoPay</span>
          </div>
          <div className="flex flex-col items-center">
            <div className=" border-black bg-secondary rounded-xl p-2">
              <img src={OvoIcon} alt="tes" className="h-12 w-12" />
            </div>
            <span className="text-xs font-semibold mt-2 ">Ovo</span>
          </div>
          <div className="flex flex-col items-center">
            <div className=" border-black bg-secondary rounded-xl p-2">
              <img src={DanaIcon} alt="" className="" />
            </div>
            <span className="text-xs font-semibold  mt-2 ">Dana</span>
          </div>
        </div>
      </div>
      {/* Menu */}

      {/* Riwayat Transaksi Start */}
      <div className="bg-green-200 border-2 border-black p-4 mb-4 rounded-3xl">
        <Link to="/app/transaction" className="flex justify-between">
          <h2 className="text-sm font-bold text-black">Riwayat Transaksi</h2>
          <button className="py-1 px-3 border-2 items-center border-black rounded-full text-xs font-bold bg-yellow-300">
            Lihat semua 👉
          </button>
        </Link>
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
            <div className="flex flex-row gap-2  items-center">
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

      {/* Invite Start*/}
      <div className="bg-green-200 border-2  border-black p-4 mb-4 rounded-3xl">
        <div className="flex justify-between">
          <h2 className="text-sm font-bold text-black">Undang Teman Kamu ✨</h2>
          <button className="py-1 px-3 border-2 items-center border-black rounded-full text-xs font-bold bg-yellow-300">
            Undang 👉
          </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-xs">
            Pakai Klora lebih seru kalau ada teman buat share info terbaru. Ayo
            ajak mereka download !.{" "}
          </p>
        </div>
      </div>
      {/* Invite End*/}
    </>
  );
}
