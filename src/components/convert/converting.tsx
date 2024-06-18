import { Link } from "react-router-dom";
import { GopayIcon } from "../../modules/Image";
import { ArrowCircleLeft } from "iconsax-react";
import { path } from "../../modules/constant";

export default function Converting() {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <Link to={path.HOME}>
          <ArrowCircleLeft
            variant="Linear"
            className="text-black font-bold h-10"
          />
        </Link>
        <h2 className="text-medium font-bold text-black pr-2">GoPay</h2>
      </div>
      <Link to="/app/swapPoint">
        <div className="border-2 border-black bg-green rounded-3xl p-4">
          <div className="flex justify-between  m-2 items-center">
            <div className=" pr-5">
              <span className="text-xs text-white">
                Tukar Poin Klora Senilai
              </span>
              <h2 className="text-white font-black text-5xl">10.000</h2>
            </div>
            <div className=" mr-4 p-3 bg-white rounded-full">
              <img src={GopayIcon} alt="" className="h-8" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
