import { convertCoin } from "@modules/Image";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import { ButtonLogin } from "./ButtonLogin";
import { InputField } from "./InputField";

interface IVerifyCodeProps {
  phoneNumber: string;
  secret: string[];
  setSecret: Dispatch<SetStateAction<string[]>>;
  error: string | null;
  handleVerify: () => void;
  handleReset: () => void;
  isLoading: boolean;
}
export function VerifyCode({
  phoneNumber,
  secret,
  setSecret,
  error,
  handleVerify,
  handleReset,
  isLoading,
}: IVerifyCodeProps) {
  return (
    <>
      <div className="flex flex-col text-center ">
        <img src={convertCoin} className="h-40 -mb-4" alt="klora-logo" />
        <h1 className="font-medium text-2xl">Phone Verification</h1>
        <span className="text-base text-gray-600">
          We've sent an SMS with an activation code to your phone
          <span>
            {" "}
            <span className="underline">+62{phoneNumber}</span>
            <span
              onClick={handleReset}
              className="cursor-pointer text-sm text-lime-600"
            >
              {" "}
              change number
            </span>
          </span>
        </span>
      </div>
      <InputField values={secret} setValues={setSecret} />
      <span className="text-sm text-red-500 ">{error ? error : null}</span>

      <ButtonLogin onClick={handleVerify} isLoading={isLoading}>
        Verify
      </ButtonLogin>

      <div className="w-full text-center my-2 text-gray-600">
        <ResendCode />
      </div>
    </>
  );
}

const ResendCode = () => {
  const [timeLeft, setTimeLeft] = useState(60); // Initialize timer with 60 seconds
  const handleResend = () => {
    setTimeLeft(200);
  };
  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      // Cleanup the interval on component unmount or when timeLeft changes
      return () => clearInterval(timerId);
    }
  }, [timeLeft]);

  if (timeLeft === 0) {
    return (
      <span className="cursor-pointer" onClick={handleResend}>
        Resend Code
      </span>
    );
  }

  return (
    <>
      <span className="text-sm">
        Ingin mengirim ulang OTP? mohon tunggu sebentar
      </span>
      <span className="flex flex-col text-sm">{timeLeft}s </span>
    </>
  );
};
