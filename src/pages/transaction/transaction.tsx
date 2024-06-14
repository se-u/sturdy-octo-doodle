import { ArrowCircleLeft } from "iconsax-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";


interface ITransaction {
    date: string;
    id: number;
    name: string;
    amount: number;
    paymentMethod: string;
}

export default function Transaction() {

    const transactions: ITransaction[] = [
        { date: "Senin, 9 Juni 2024", id: 1, name: "Kopi", amount: -67000, paymentMethod: "dana.svg" },
        { date: "Senin, 9 Juni 2024", id: 2, name: "Kue", amount: -25000, paymentMethod: "dana.svg" },
        { date: "Senin, 9 Juni 2024", id: 3, name: "Teh", amount: -15000, paymentMethod: "dana.svg" },
        { date: "Senin, 10 Juni 2024", id: 4, name: "Susu Kopi", amount: -67000, paymentMethod: "dana.svg" },
        { date: "Senin, 10 Juni 2024", id: 5, name: "Roti", amount: -30000, paymentMethod: "dana.svg" },
        { date: "Selasa, 11 Juni 2024", id: 6, name: "Air Mineral", amount: -10000, paymentMethod: "dana.svg" },
        { date: "Selasa, 11 Juni 2024", id: 7, name: "Jus Buah", amount: -45000, paymentMethod: "dana.svg" }
    ];

    const groupedTransactions = useMemo(() => {
        return transactions.reduce<{ [key: string]: ITransaction[] }>((groups, transaction) => {
            const date = transaction.date;
            if (!groups[date]) {
                groups[date] = [];
            }
            groups[date].push(transaction);
            return groups;
        }, {});
    }, [transactions]);

    // Looping through object
    { Object.keys(groupedTransactions).map(date => (console.log(groupedTransactions[date]))) }

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <Link to="/app/home">
                    <ArrowCircleLeft variant="Linear" className="text-black  font-bold h-10" />
                </Link>
                <h2 className="text-sm font-bold text-black pr-2">Riwayat Transaksi</h2>
            </div>
            <div className="bg-green-200 border-2 border-black p-4 mb-4 rounded-xl">
                <p className="text-xs font-bold">Senin, 9 Juni 2024</p>
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
            <div className="bg-green-200 border-2 border-black p-4 mb-4 rounded-xl">
                <p className="text-xs font-bold">Senin, 10 Juni 2024</p>
                {/* Data Transaction */}
                <div className="flex  py-3 justify-between mt-6">
                    <div className="flex flex-row gap-12">
                        <img src="/Swap.png" alt="tes" className="h-10" />
                        <span className="font-bold text-xs">Susu Kopi</span>
                    </div>
                    <div className="flex flex-col pr-2 gap-2">
                        <span className="font-bold text-xs">- Rp67.000</span>
                        <img src="/dana.svg" alt="tes" className="h-4" />
                    </div>
                </div>
            </div>
        </>
    );
}