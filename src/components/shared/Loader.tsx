import { convertCoin } from "@modules/Image";

function Loader() {
  return (
    <div className="bg-primary-900 w-screen h-screen font-dmsans">
      <div className="relative bg-white  max-w-sm mx-auto h-screen">
        <div className="overflow-y-scroll h-screen ">
          <div className="-mt-6 h-screen items-center flex flex-col justify-center text-center">
            <img className="h-52 animate-pulse " src={convertCoin} alt="" />
            <p className="-mt-7 z-10 italic font-bold text-gray-500">
              Your Future Lifestyle in Your Pocket
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 z-50 w-full"></div>
      </div>
    </div>
  );
}

export default Loader;
