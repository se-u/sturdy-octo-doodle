// SwapPoint.tsx
import { useParams, Link } from "react-router-dom";
import {ArrowCircleLeft} from "iconsax-react";

export default function SwapPoint() {
    const { type, amount } = useParams();

    return (
        <div>
            <div className="flex justify-between items-center mb-4 px-2">
                <Link to={`/app/convert/${type}`}>
                    <ArrowCircleLeft variant="Linear" className="text-black font-bold h-10" />
                </Link>
                <h2 className="text-medium font-bold text-black pr-2">{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            </div>
            <div className="p-2">
                <div className="flex flex-col py-2">
                    <label className="pl-1 font-bold">Kode Produk</label>
                    <input
                        type="text"
                        value={`${type.toUpperCase()}_CUSTOMER${amount}`}
                        className="border-green border-2 rounded-3xl p-2"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="pl-1 font-bold">Nama Voucher</label>
                    <input
                        type="text"
                        value={`${type.toUpperCase()} ${amount}`}
                        className="border-green border-2 rounded-3xl p-2"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="pl-1 font-bold">Jumlah Poin</label>
                    <input
                        type="number"
                        value="11250"
                        className="border-green border-2 rounded-3xl p-2"
                    />
                </div>
                <div className="flex flex-col py-2">
                    <label className="pl-1 font-bold">Nomor HP</label>
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
        </div>
    );
}
