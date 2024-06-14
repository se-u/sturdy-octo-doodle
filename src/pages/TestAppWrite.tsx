import { useContext } from "react";
import { PoinContext } from "../context/poinContext";

export const TestAppWrite = () => {
  const poin = useContext(PoinContext);
  const prevPoin = poin?.poin;

  return (
    <>
      {poin?.poin}

      <button
        className="flex bg-slate-400 rounded shadow-md"
        onClick={() => poin?.update(prevPoin! + 2)}
      >
        Add +2
      </button>
    </>
  );
};
