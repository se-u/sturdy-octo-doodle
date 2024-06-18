import { useState } from "react";
import { useAuth } from "../../@types";
import { convertCoin } from "@modules/Image";
import { ButtonLogin } from "./ButtonLogin";

import VerifyCode from "./VerifyCode";

const countries = [
  { name: "Indonesia", code: "+62" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Canada", code: "+1" },
  { name: "Australia", code: "+61" },
  // Add more countries as needed
];

function Login() {
  const { sendCode } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [userId, setUserId] = useState<string | null>();
  const [error, setError] = useState<string | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [selectedCountry, setSelectedCountry] = useState<string>("+62");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleNext = async () => {
    try {
      setIsLoading(true);
      if (isValid(phoneNumber)) {
        const userId = await sendCode(selectedCountry + phoneNumber);
        setUserId(userId);
      }
    } catch (error) {
      throw new Error("error");
    } finally {
      setIsLoading(false);
    }
  };

  function isValid(phoneNumber: string) {
    if (selectedCountry === " ") {
      setError("Country code cant be empty");
      return false;
    }
    if (isNotNumeric(phoneNumber)) {
      setError("phone number contains only digits");
      return false;
    }
    if (isNotPhoneNumber(phoneNumber)) {
      setError("phone number should not less than 8 digits");
      return false;
    }
    setError(null);
    return true;
  }

  if (userId) {
    return (
      <VerifyCode
        userId={userId}
        reset={setUserId}
        phoneNumber={selectedCountry + phoneNumber}
      />
    );
  }

  return (
    <>
      <div className="flex flex-col text-center ">
        <img src={convertCoin} className="h-40 -mb-4" alt="klora-logo" />
        <h1 className="font-medium text-2xl">Klora</h1>
        <span className="text-base text-gray-600">
          Please confirm your country code and enter your phone number
        </span>
      </div>
      <div className="mt-4 w-full text-black py-2 px-4 rounded-full border-2 text-base leading-tight border-black transform transition-transform">
        <select
          className="w-full"
          id="country-select"
          value={selectedCountry}
          onChange={handleSelectChange}
        >
          {countries.map((country, index) => (
            <option key={index} value={country.code}>
              {country.name} ({country.code})
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center mt-4">
        <span className="absolute z-10 px-4 text-base">{selectedCountry}</span>
        <input
          onChange={(e) => {
            setPhoneNumber(e.target.value);
            isValid(phoneNumber);
          }}
          placeholder="89xxxxxxxxx"
          value={phoneNumber}
          className=" w-full text-black py-2 px-12  rounded-full border-2 text-base leading-tight border-black transform transition-transform "
        />
      </div>
      <span className="text-sm text-red-500 ">{error ? error : null}</span>

      <ButtonLogin onClick={handleNext} isLoading={isLoading}>
        Next
      </ButtonLogin>
    </>
  );
}

function isNotNumeric(phoneNumber: string) {
  // Check if the phone number contains only digits
  const isNumeric = /^[0-9]+$/.test(phoneNumber);
  if (!isNumeric) return true;
  return false;
}

function isNotPhoneNumber(phoneNumber: string) {
  // Check if the phone number is exactly 8 digits long
  if (phoneNumber.length <= 8) return true;
  return false;
}

export default Login;
