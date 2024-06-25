export default function TopBarVolunteer() {
  return (
    <>
      <div className="flex justify-between px-3 py-4  items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <img src="/user_blue.svg" alt="" className="h-7" />
          <h2 className="font-bold">Sen Arya</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-1 items-center  px-1 py-1 ">
            {/* SYMBOL */}
            <label className="relative inline-flex cursor-pointer items-center">
              <input id="switch" type="checkbox" className="peer sr-only" />
              <label className="hidden"></label>
              <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
            </label>
            {/* TICKER */}
          </div>
        </div>
      </div>
    </>
  );
}
