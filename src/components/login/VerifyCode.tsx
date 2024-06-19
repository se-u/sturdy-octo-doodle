import { convertCoin } from "@modules/Image";
import {
  Dispatch,
  SetStateAction,
  useRef,
  ChangeEvent,
  useState,
  useEffect,
  startTransition,
} from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../@types";
import { path } from "@modules/constant";
import { ButtonLogin } from "./ButtonLogin";

interface IVerifyCodeProps {
  phoneNumber: string;
  userId: string;
  reset: Dispatch<SetStateAction<string | null | undefined>>;
}
export default function VerifyCode({
  phoneNumber,
  userId,
  reset,
}: IVerifyCodeProps) {
  const navigate = useNavigate();
  const { verifyCode } = useAuth();
  const [secret, setSecret] = useState<string[]>(["", "", "", "", "", ""]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleVerify = async () => {
    const secretStr = secret.join("");
    if (secretStr == "") setError("Please enter your code otp");
    try {
      setIsLoading(true);
      const res = await verifyCode(userId, secretStr);
      if (res === "invalid-token") {
        setError("Your code is invalid, please check your message");
      }
      startTransition(() => {
        navigate(path.HOME);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col text-center ">
        <img src={convertCoin} className="h-40 -mb-4" alt="klora-logo" />
        <h1 className="font-medium text-2xl">Phone Verification</h1>
        <span className="text-base text-gray-600">
          We've sent an SMS with an activation code to your phone
          <span>
            <span className="underline"> {phoneNumber}</span>
            <span
              onClick={() => reset(null)}
              className="cursor-pointer text-sm text-lime-600"
            >
              {" change number"}
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
        <ResendCode phoneNumber={phoneNumber} />
      </div>
    </>
  );
}

const InputField = ({
  values,
  setValues,
}: {
  values: string[];
  setValues: Dispatch<SetStateAction<string[]>>;
}) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = e.target.value;
    if (newValue.length > 1) return;
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);

    if (newValue.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    if (newValue.length === 0 && index >= 1) {
      inputRefs.current[index - 1].focus();
    }
  };
  return (
    <div className="flex flex-row items-center justify-between w-full my-5">
      {values.map((value, index) => (
        <div className="w-12 h-12 text-black" key={index}>
          <input
            ref={(el) => {
              if (el) inputRefs.current[index] = el;
            }}
            maxLength={1}
            className="w-full h-full flex flex-col items-center justify-center text-center  outline-none rounded-xl border border-gray-200 text-base bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
            type="text"
            value={value}
            onChange={(e) => handleChange(e, index)}
          />
        </div>
      ))}
    </div>
  );
};

const ResendCode = ({ phoneNumber }: { phoneNumber: string }) => {
  const { sendCode } = useAuth();
  const [timeLeft, setTimeLeft] = useState(60); // Initialize timer with 60 seconds
  const handleResend = async () => {
    setTimeLeft(200);
    // TODO
    await sendCode(phoneNumber);
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
