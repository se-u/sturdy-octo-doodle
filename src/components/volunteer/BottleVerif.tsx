export default function BottleVerif() {
  return (
    <>
      <div>
        <p className="text-gray-500">Botol dari</p>
        <h1 className="text-2xl text-green font-bold">Sindu Aditya</h1>
        <div className="mt-8 flex flex-col gap-3 font-semibold ">
          <div className="flex flex-col gap-1">
            <label htmlFor="botol" className="text-sm pl-2">
              Jumlah Botol:
            </label>
            <input
              type="number"
              value="4"
              placeholder="Masukkan Jumlah Botol"
              className="py-2 border-2 rounded-xl pl-3"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="botol" className="text-sm pl-2">
              Koin yang diterima:
            </label>
            <input
              type="text"
              value="200 Poin"
              className="disabled py-2  border-2 rounded-xl pl-3"
            />
          </div>
          <div className="mt-10">
            <button className="bg-green w-full border-4 text-xl py-3 border-black text-white font-bold rounded-2xl">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
