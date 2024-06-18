import { ArrowCircleLeft } from "iconsax-react";
import { Link } from "react-router-dom";

export default function SwapPoint() {
  return (
    <>
     <div className="flex justify-between items-center mb-4 px-2">
        <Link to="/app/convert">
          <ArrowCircleLeft
            variant="Linear"
            className="text-black font-bold h-10"
          />
        </Link>
        <h2 className="text-medium font-bold text-black pr-2">GoPay</h2>
      </div>
      <div className="p-2">
        <div className="flex flex-col py-2">
          <label className="pl-1 font-bold ">Kode Produk</label>
          <input
            type="text"
            value="GOPAY_CUSTOMER10"
            className="border-green border-2 rounded-3xl p-2"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="pl-1 font-bold ">Nama Voucher</label>
          <input
            type="text"
            value="GOPAY 10.000"
            className="border-green border-2 rounded-3xl p-2"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="pl-1 font-bold ">Jumlah Poin</label>
          <input
            type="number"
            value="11250"
            className="border-green border-2 rounded-3xl p-2"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="pl-1 font-bold ">Jumlah Poin</label>
          <input
            type="tel"
            value="089123456789"
            className="border-green border-2 rounded-3xl p-2"
          />
        </div>
        <button className="bg-green w-full py-2 border-2 border-black rounded-3xl font-bold mt-4">
            Tukar Poin
        </button>
      </div>
    </>
  );
}
