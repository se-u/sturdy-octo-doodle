import { path } from "@modules/constant";
import { Link } from "react-router-dom";

function BottomNav() {

  return (
    <>
    <div className="flex justify-center w-full">
       <div className=" bg-green shadow-lg border-2 rounded-t-3xl border-black h-12 flex w-full justify-center items-center ">
      <Link to={path.DEPOSIT} className="bg-yellow-300 absolute -top-5 text-black font-black py-2 px-6 rounded-full border-2 text-xl leading-tight border-black transform transition-transform hover:scale-105">
        Deposit
      </Link>
    </div>
    </div>
    </>
  );
}

export default BottomNav;