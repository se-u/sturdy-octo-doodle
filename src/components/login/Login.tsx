import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { convertCoin } from "../Image";
import { useAuth } from "../../@types";
import { Navigate } from "react-router-dom";

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

function Login() {
  const { sendCode, verifyCode, session } = useAuth();
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [secret, setSecret] = useState<string[]>(["", "", "", "", "", ""]);
  const [error, setError] = useState<string | null>(null);
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (session) {
    return <Navigate to={"/app/home"}></Navigate>;
  }

  const handleNext = async () => {
    // handle after input number is correct to OTP
    if (isNotNumeric(phoneNumber)) {
      setError("phone number contains only digits");
      return;
    }
    if (isNotPhoneNumber(phoneNumber)) {
      setError("phone number should not less than 8 digits");
      return;
    }
    setError(null);

    try {
      setIsLoading(true);
      const userId = await sendCode("+44" + phoneNumber);
      setUserId(userId!);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      setIsCodeSent(true);
    }
  };

  const handleVerify = async () => {
    const secretStr = secret.join("");
    if (secretStr == "") setError("Please enter your code otp");
    try {
      setIsLoading(true);
      const res = await verifyCode(userId, secretStr);
      if (res === "invalid-token") {
        setError("Your code is invalid, please check your message");
        return;
      }
    } catch (error) {
      console.error(error);
      return;
    } finally {
      setIsLoading(false);
    }
    return <Navigate to="/setup"></Navigate>;
  };

  if (isCodeSent) {
    return (
      <div className="bg-primary-900 w-screen h-screen font-dmsans">
        <div className="relative bg-white  max-w-sm mx-auto h-screen p-6 ">
          <VerifyCode
            error={error}
            handleVerify={handleVerify}
            phoneNumber={phoneNumber}
            secret={secret}
            setSecret={setSecret}
            handleReset={() => setIsCodeSent(false)}
            isLoading={isLoading}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary-900 w-screen h-screen font-dmsans">
      <div className="relative bg-white  max-w-sm mx-auto h-screen p-6 ">
        <EnterPhoneNumber
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          handleNext={handleNext}
          error={error}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

interface IEnterPhoneNumberProps {
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  error: string | null;
  handleNext: () => void;
  isLoading: boolean;
}
function EnterPhoneNumber({
  phoneNumber,
  setPhoneNumber,
  error,
  handleNext,
  isLoading,
}: IEnterPhoneNumberProps) {
  return (
    <>
      <div className="flex flex-col text-center ">
        <img src={convertCoin} className="h-40 -mb-4" alt="klora-logo" />
        <h1 className="font-medium text-2xl">Klora</h1>
        <span className="text-base text-gray-600">
          Please confirm your country code and enter your phone number
        </span>
      </div>
      <div className="flex items-center mt-4">
        <span className="absolute z-10 px-4 text-base">+62</span>
        <input
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="89xxxxxxxxx"
          value={phoneNumber}
          className=" w-full text-black py-2 px-12  rounded-full border-2 text-base leading-tight border-black transform transition-transform "
        />
      </div>
      <span className="text-sm text-red-500 ">{error ? error : null}</span>

      <button
        onClick={handleNext}
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
          {!isLoading ? <span className="py-2">Next</span> : null}
        </div>
      </button>
    </>
  );
}

interface IVerifyCodeProps {
  phoneNumber: string;
  secret: string[];
  setSecret: Dispatch<SetStateAction<string[]>>;
  error: string | null;
  handleVerify: () => void;
  handleReset: () => void;
  isLoading: boolean;
}
function VerifyCode({
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

      <button
        onClick={handleVerify}
        className="mt-4 bg-yellow-300 w-full text-black py-2  rounded-full border-2 text-lg leading-tight border-black transform transition-transform"
      >
        {!isLoading ? "Verify" : null}
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
        ) : null}{" "}
      </button>

      <div className="w-full text-center my-2 text-gray-600">
        <ResendCode />
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

export default Login;
