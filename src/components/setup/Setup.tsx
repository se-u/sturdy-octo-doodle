import { useEffect, useState } from "react";
import { convertCoin } from "../Image";
import { account } from "../../lib/appwrite";
import { Navigate } from "react-router-dom";

function Setup() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState({ firstName: "", lastName: "" });
  const [isNavigate, setIsNavigate] = useState<boolean>();
  const handleSave = async () => {
    if (firstName === "") {
      setError((prev) => ({ ...prev, firstName: "First name can't be empty" }));
      return;
    }
    if (lastName === "") {
      setError((prev) => ({ ...prev, lastName: "Last name can't be empty" }));
      return;
    }
    try {
      setIsLoading(true);
      await account.updateName(firstName + " " + lastName);
    } catch (e) {
      console.log(e);
      return;
    } finally {
      setIsLoading(false);
    }
    setIsNavigate(true);
  };

  useEffect(() => {
    const get = async () => {
      const user = await account.get();
      if (user.name !== "") {
        setIsNavigate(true);
      }
    };
    get();
  }, [isNavigate]);

  if (isNavigate) {
    return <Navigate to={"/app/home"} />;
  }

  return (
    <div className="bg-primary-900 w-screen h-screen font-dmsans">
      <div className="relative bg-white  max-w-sm mx-auto h-screen p-6 ">
        <div className="flex flex-col text-center ">
          <img src={convertCoin} className="h-40 -mb-4" alt="klora-logo" />
          <h1 className="font-bold text-2xl">Welcome!</h1>
          <span className="text-base text-gray-600">
            Thank your for join Klora, First let's set up your name
          </span>
          <div className="flex flex-col gap-1 my-2">
            <input
              type="text"
              placeholder="First name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className=" w-full text-black py-2 px-6 rounded-full border-2 text-base leading-tight border-black transform transition-transform "
            />

            <span className="text-left px-4 text-sm text-red-500 items-start">
              {error.firstName}
            </span>

            <input
              type="text"
              placeholder="Last name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className=" w-full text-black py-2 px-6 rounded-full border-2 text-base leading-tight border-black transform transition-transform "
            />

            <span className="text-left px-4 text-sm text-red-500 items-start">
              {error.lastName}
            </span>
          </div>
        </div>

        <button
          onClick={handleSave}
          className="mt-4  bg-yellow-300 w-full text-black rounded-full border-2 text-lg leading-tight border-black transform transition-transform"
        >
          <div className="flex items-center justify-center">
            {isLoading ? (
              <svg
                fill="none"
                className="w-10 h-10 animate-spin"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
                  fill="currentColor"
                  fillRule="evenodd"
                />
              </svg>
            ) : null}
            {!isLoading ? <span className="py-2">Save</span> : null}
          </div>
        </button>
      </div>
    </div>
  );
}

export default Setup;
