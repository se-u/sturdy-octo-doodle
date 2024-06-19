// ConvertList.tsx
import { Link, useParams } from "react-router-dom";
import {path} from "@modules/constant.ts";
import {ArrowCircleLeft} from "iconsax-react";
import {DanaIcon, GopayIcon, OvoIcon} from "@modules/Image.ts";


const conversionOptions = {
    gopay: ["10.000", "20.000", "25.000"],
    dana: ["10.000", "20.000", "25.000"],
    ovo: ["10.000", "20.000", "25.000"]
};

export default function ConvertList() {
    const { type } = useParams();
    const options = conversionOptions[type] || [];

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <Link to={path.HOME}>
                    <ArrowCircleLeft variant="Linear" className="text-black font-bold h-10" />
                </Link>
                <h2 className="text-medium font-bold text-black pr-2">{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
            </div>
            {options.map(option => (
                <Link to={`/app/swapPoint/${type}/${option}`} key={option}>
                    <div className="border-2 border-black bg-green rounded-3xl p-4 mb-2">
                        <div className="flex justify-between m-2 items-center">
                            <div className="pr-5">
                                <span className="text-xs text-white">Tukar Poin Klora Senilai</span>
                                <h2 className="text-white font-black text-5xl">{option}</h2>
                            </div>
                            <div className="mr-4 p-3 bg-white rounded-full">
                                <img src={type === "gopay" ? GopayIcon : type === "dana" ? DanaIcon : OvoIcon} alt="" className="h-8" />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
