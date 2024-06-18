import { AppwriteException, ID, Models } from "appwrite";
import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";

export const AuthContext = createContext<AuthContextType | null>(null);

export interface AuthContextType {
  session: Models.Session | null;
  logoutThisDevice: () => Promise<void>;
  sendCode: (phoneNumber: string) => Promise<string | undefined>;
  verifyCode: (userId: string, secret: string) => Promise<string | undefined>;
}
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [session, setSession] = useState<Models.Session | null>(null);
  // const [isLoading, setIsLoading] = useState<boolean>();
  const init = async () => {
    try {
      // setIsLoading(true);
      const session = await account.getSession("current");
      setSession(session);
    } catch (e: unknown) {
      if (e instanceof AppwriteException) {
        // console.log(e.code);
        setSession(null);
        throw e;
      }
      throw e;

    } finally {
      // setIsLoading(false);
      // console.log("done");
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

  const verifyCode = async (
    userId: string,
    secret: string
  ): Promise<string | undefined> => {
    try {
      const session = await account.createSession(userId, secret);
      setSession(session);
      console.log("Verification success!");
    } catch (error) {
      if (error instanceof AppwriteException) {
        if (error.code === 401) {
          return "invalid-token";
        }
      }
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
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// function Loading() {
//   return (
//     <div className="relative flex w-64 animate-pulse gap-2 p-4">
//       <div className="h-12 w-12 rounded-full bg-slate-400"></div>
//       <div className="flex-1">
//         <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
//         <div className="h-5 w-[90%] rounded-lg bg-slate-400 text-sm"></div>
//       </div>
//       <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
//     </div>
//   );
// }
