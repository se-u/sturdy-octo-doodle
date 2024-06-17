import { useContext } from "react";
import { AuthContext, AuthContextType } from "../context/authContext";

export const useAuth = () => {
  const context = useContext(AuthContext) as AuthContextType;
  if (!context) throw Error("useAuth must be used within a AuthProvider");
  return context;
};
