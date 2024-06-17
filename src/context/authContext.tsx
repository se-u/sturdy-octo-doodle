import { AppwriteException, ID, Models } from "appwrite";
import { createContext, useContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthContextType {
  session: Models.Session | null;
  logoutThisDevice: () => Promise<void>;
  sendCode: (phoneNumber: string) => Promise<string | undefined>;
  verifyCode: (userId: string, secret: string) => Promise<void>;
}
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Models.Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>();
  const init = async () => {
    try {
      setIsLoading(true);
      const session = await account.getSession("current");
      setSession(session);
    } catch (e: unknown) {
      if (e instanceof AppwriteException) {
        console.log(e.code);
        setSession(null);
        return;
      }
      console.error("Failed to logout session on this device", e);
    } finally {
      setIsLoading(false);
      console.log("done");
    }
  };

  const sendCode: (phoneNumber: string) => Promise<string | undefined> = async (
    phoneNumber: string
  ) => {
    try {
      const token = await account.createPhoneToken(ID.unique(), phoneNumber);
      console.log("Verification code sent!");
      return token.userId;
    } catch (error) {
      console.log("Failed to send verification code.");
      console.error(error);
    }
  };

  const verifyCode = async (userId: string, secret: string) => {
    try {
      const session = await account.createSession(userId, secret);
      setSession(session);
      console.log("Verification success!");
    } catch (error) {
      console.log("Failed to verify.");
      console.error(error);
    }
  };

  const logoutThisDevice = async () => {
    try {
      await account.deleteSession("current");
      init();
      return;
    } catch (e: unknown) {
      if (e instanceof AppwriteException) {
        console.log(e.code);
        return;
      }
      console.error("Failed to logout session on this device", e);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <AuthContext.Provider
      value={{ session, logoutThisDevice, sendCode, verifyCode }}
    >
      <>
        {isLoading ? <Loading /> : null}
        {!isLoading ? (
          <>
            {session === null ? <PhoneNumberLogin /> : null}
            {session ? (
              <>
                {/* if user is authenticated */}
                {children}
                <button
                  onClick={logoutThisDevice}
                  className="m-4 bg-green p-2 rounded"
                >
                  Log Out
                </button>
              </>
            ) : null}
          </>
        ) : null}
      </>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

const PhoneNumberLogin: React.FC = () => {
  const { sendCode, verifyCode } = useContext(AuthContext) as AuthContextType;
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userId, setUserId] = useState("");
  const [secret, setSecret] = useState("");

  const handleSendOtp = async () => {
    const userId = await sendCode(phoneNumber);
    if (userId) setUserId(userId);
  };

  const handleVerifyOtp = async () => {
    await verifyCode(userId, secret);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        {userId ? (
          <>
            {" "}
            <h2 className="text-2xl font-bold mb-4 text-center">Verify OTP</h2>
            <input
              type="text"
              placeholder="******"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              className="w-full p-3 border rounded mb-4"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-blue-500 text-white p-3 rounded"
            >
              Send OTP
            </button>
          </>
        ) : null}

        {!userId ? (
          <>
            {" "}
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-3 border rounded mb-4"
            />
            <button
              onClick={handleSendOtp}
              className="w-full bg-blue-500 text-white p-3 rounded"
            >
              Send OTP
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

function Loading() {
  return (
    <div className="relative flex w-64 animate-pulse gap-2 p-4">
      <div className="h-12 w-12 rounded-full bg-slate-400"></div>
      <div className="flex-1">
        <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
        <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
      </div>
      <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
    </div>
  );
}
