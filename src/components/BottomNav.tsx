
function BottomNav() {

  return (
    <>
       <div className="relative bg-white shadow-lg border-t-4 border-black h-12 flex justify-center items-center rounded-tr-full rounded-tl-full">
      <button className="bg-yellow-300 absolute -top-5 text-black font-bold py-2 px-4 rounded-full border-2 border-black transform transition-transform hover:scale-105">
        Deposit
      </button>
    </div>
    </>
  );
}

export default BottomNav;