import { startTransition, useState } from "react";
import { convertCoin } from "../../modules/Image";
import { account } from "../../lib/appwrite";
import { ButtonLogin } from "../login/ButtonLogin";
import { AppwriteException } from "appwrite";
import { path } from "@modules/constant";
import { Navigate, useNavigate } from "react-router-dom";
import useSWR from "swr";

const fetcher = () => {
  return account.get().then((res) => res);
};

function Setup() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState({ firstName: "", lastName: "" });
  const { data } = useSWR("USER", fetcher, {
    suspense: true,
  });
  const navigate = useNavigate();

  if (data.name !== "") {
    return <Navigate to={path.HOME} />;
  }

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
      startTransition(() => {
        navigate(path.HOME);
      });
    } catch (e) {
      if (e instanceof AppwriteException) {
        setError((prev) => ({ ...prev, lastName: e.message }));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
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

      <ButtonLogin onClick={handleSave} isLoading={isLoading}>
        Save
      </ButtonLogin>
    </>
  );
}

export default Setup;
