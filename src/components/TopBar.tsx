export default function TopBar() {
  return (
    <>
      <div className="flex justify-between px-3 py-4 border-b-2 rounded-b-md border-black overflow-x-auto items-center">
        <div className="flex items-center gap-2">
          <img src="/user_blue.svg" alt="" className="h-7" />
          <h2 className="font-bold">Sindu Aditya</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-1 items-center bg-green-200 rounded-md border-2 border-black px-1 py-1 ">
            {/* SYMBOL */}
            <img src="/KLOC.svg" alt="klocoin" className="w-6 h-6" />
            {/* TICKER */}
            <p className="text-xs font-semibold text-neutral-600 pr-1">
              0,02
            </p>
          </div>
        </div>
      </div>
    </>
  );
}