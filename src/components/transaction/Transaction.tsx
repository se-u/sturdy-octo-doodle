import { ArrowCircleLeft } from "iconsax-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ReceiveIcon } from "../../modules/Image";
import { path } from "../../modules/constant";

interface ITransaction {
  date: string;
  id: number;
  name: string;
  amount: number;
  paymentMethod: string;
}

export default function Transaction() {
  const transactions: ITransaction[] = [
    {
      date: "Senin, 9 Juni 2024",
      id: 1,
      name: "Kopi",
      amount: -67000,
      paymentMethod: "Poin Klora",
    },
    {
      date: "Senin, 9 Juni 2024",
      id: 2,
      name: "Kue",
      amount: -25000,
      paymentMethod: "GoPay",
    },
    {
      date: "Senin, 9 Juni 2024",
      id: 3,
      name: "Teh",
      amount: -15000,
      paymentMethod: "Dana",
    },
    {
      date: "Senin, 10 Juni 2024",
      id: 4,
      name: "Susu Kopi",
      amount: -67000,
      paymentMethod: "Poin Klora",
    },
    {
      date: "Senin, 10 Juni 2024",
      id: 5,
      name: "Roti",
      amount: -30000,
      paymentMethod: "GoPay",
    },
    {
      date: "Selasa, 11 Juni 2024",
      id: 6,
      name: "Air Mineral",
      amount: -10000,
      paymentMethod: "DANA",
    },
    {
      date: "Selasa, 11 Juni 2024",
      id: 7,
      name: "Jus Buah",
      amount: -45000,
      paymentMethod: "Ovo",
    },
  ];

  const groupedTransactions = useMemo(() => {
    return transactions.reduce<{ [key: string]: ITransaction[] }>(
      (groups, transaction) => {
        const date = transaction.date;
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(transaction);
        return groups;
      },
      {}
    );
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <Link to={path.HOME}>
          <ArrowCircleLeft
            variant="Linear"
            className="text-black font-bold h-10"
          />
        </Link>
        <h2 className="text-medium font-bold text-black pr-2">
          Riwayat Transaksi
        </h2>
      </div>

      {Object.keys(groupedTransactions).map((date) => (
        <div key={date} className="mb-4">
          <div className="bg-green-200 border-2 border-black p-4 mb-4 rounded-3xl">
            <p className="text-xs font-bold  mb-4">{date}</p>
            {groupedTransactions[date].map((transaction) => (
              <div
                key={transaction.id}
                className="flex border-black justify-between items-center  pb-1"
              >
                <div className="flex flex-row gap-2 items-center">
                  <img src={ReceiveIcon} alt="icon" className="h-10" />
                  <span className="font-medium text-lg">
                    {transaction.paymentMethod}
                  </span>
                </div>
                <span className="font-semibold text-lightgray text-medium">
                  {transaction.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
