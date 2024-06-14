import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Statistic Start */}
      <div className="bg-green-200 border-2 border-black p-4 mb-4 rounded-xl flex justify-between">
        <div className="">
          
          <h2 className="text-sm font-bold text-black ">Klora Point</h2>
          <p className="text-gray-700 text-sm"><span className="text-lg font-bold">100</span> Point</p>
          <h2 className="text-sm font-bold text-black mt-2">Total Botol</h2>
          <p className="text-gray-700 text-sm"><span className="text-lg font-bold">20</span> Botol</p>
        </div>
        <div className="">
          <img src="/bags/1.png" className="rounded-xl shadow-md" alt="Tas" width={125} />
        </div>
      </div>
      {/* Statistic End */}

      {/* Menu */}
      <div className="">
        <div className="grid grid-cols-4 gap-2 bg-white mb-4 ">
          <div className="flex flex-col items-center">
            <div className="grid border-2 border-black rounded-xl p-2">
              <img src="/KLOC.svg" alt="" className="h-12" />
            </div>
            <span className="text-xs mt-2">Klora Coin</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="grid border-2 border-black rounded-xl p-2">
              <img src="/KLOC.svg" alt="tes" className="h-12" />
            </div>
            <span className="text-xs mt-2 ">Go Pay</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="grid border-2 border-black rounded-xl p-2">
              <img src="/KLOC.svg" alt="" className="h-12" />
            </div>
            <span className="text-xs mt-2 ">Ovo</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="grid border-2 border-black rounded-xl p-2">
              <img src="/KLOC.svg" alt="" className="h-12" />
            </div>
            <span className="text-xs mt-2 ">Dana</span>
          </div>
        </div>
      </div>
      {/* Menu */}

      {/* Riwayat Transaksi Start */}
      <div className="bg-green-200 border-2 border-black p-4 mb-4 rounded-xl">
        <Link to="/app/transaction" className="flex justify-between">
          <h2 className="text-sm font-bold text-black" >Riwayat Transaksi</h2>
          <button className="py-1 px-3 border-2 items-center border-black rounded-full text-xs font-bold bg-yellow-300">Lihat semua 👉</button>
        </Link>
        {/* Data Transaction */}
        <div className="flex border-b-2 py-3 border-black justify-between mt-6">
          <div className="flex flex-row gap-12">
            <img src="/Swap.png" alt="tes" className="h-10" />
            <span className="font-bold text-xs">Kopi</span>
          </div>
          <div className="flex flex-col pr-2 gap-2">
            <span className="font-bold text-xs">- Rp67.000</span>
            <img src="/dana.svg" alt="tes" className="h-4" />
          </div>
        </div>
        <div className="flex border-b-2 py-3 border-black justify-between mt-6">
          <div className="flex flex-row gap-12">
            <img src="/Swap.png" alt="tes" className="h-10" />
            <span className="font-bold text-xs">Kopi</span>
          </div>
          <div className="flex flex-col pr-2 gap-2">
            <span className="font-bold text-xs">- Rp67.000</span>
            <img src="/dana.svg" alt="tes" className="h-4" />
          </div>
        </div>
      </div>
      {/* Riwayat Transaksi End */}

      {/* Invite Start*/}
      <div className="bg-green-200 border-2  border-black p-4 mb-4 rounded-xl">
        <div className="flex justify-between">
          <h2 className="text-sm font-bold text-black">Undang Teman Kamu ✨</h2>
          <button className="py-1 px-3 border-2 items-center border-black rounded-full text-xs font-bold bg-yellow-300">Undang 👉</button>
        </div>
        <div className="mt-4">
            <p className="text-gray-600 text-xs">Pakai Klora lebih seru kalau ada teman buat share info terbaru. Ayo ajak mereka download !. </p>
        </div>
      </div>
      {/* Invite End*/}
    </>
  );
}