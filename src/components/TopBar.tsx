import { KloraIcon } from "./Image";


export default function TopBar() {
  return (
    <>
      <div className="flex justify-between px-3 py-4  items-center">
        <div className="flex items-center gap-2">
          <img src="/user_blue.svg" alt="" className="h-7" />
          <h2 className="font-bold">Sindu Aditya</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-1 items-center  px-1 py-1 ">
            {/* SYMBOL */}
            <img src={KloraIcon} alt="klocoin" className="w-6 h-6" />
            {/* TICKER */}
            <p className="text-xs font-semibold text-black pr-1">
              0,02
            </p>
          </div>
        </div>
      </div>
    </>
  );
}