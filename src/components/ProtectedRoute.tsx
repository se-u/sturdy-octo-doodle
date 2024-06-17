import { Models } from "appwrite";
import { ReactElement, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await account.get();
        setUser(user);
      } catch (error) {
        console.error("Failed to fetch user", error);
      } finally {
        setLoading(false); // Set loading to false once fetching is done
      }
    };
    getUser();
  }, []);

  if (loading) {
    console.warn("TODO: LOADING");
    return <div>Loading...</div>; // Or a spinner component to indicate loading
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.name === "") {
    return <Navigate to="/setup" />;
  }
  return children;
};

export default ProtectedRoute;
