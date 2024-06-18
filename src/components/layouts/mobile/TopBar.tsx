import { account } from "@lib/appwrite";
import { KloraIcon } from "@modules/Image";
import { path } from "@modules/constant";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopAppBar() {
  const [name, setName] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  console.log(isLoading);
  useEffect(() => {
    const get = async () => {
      try {
        setIsLoading(true);
        const user = await account.get();
        setName(user.name);
      } catch (error) {
        console.log("");
      } finally {
        setIsLoading(false);
      }
    };
    get();
  }, [name]);

  return (
    <>
      <div className="flex justify-between px-3 py-4  items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate(path.PROFILE)}
        >
          <img src="/user_blue.svg" alt="" className="h-7" />
          <h2 className="font-bold">{name}</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-1 items-center  px-1 py-1 ">
            {/* SYMBOL */}
            <img src={KloraIcon} alt="klocoin" className="w-6 h-6" />
            {/* TICKER */}
            <p className="text-xs font-semibold text-black pr-1">0,02</p>
          </div>
        </div>
      </div>
    </>
  );
}
