import { account } from "@lib/appwrite";
import { path } from "@modules/constant";
import { AppwriteException } from "appwrite";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: React.ReactElement }) {
  account
    .get()
    .then(() => {
      return <Navigate to={path.HOME} />;
    })
    .catch((e) => {
      if (e instanceof AppwriteException) {
        if (e.code === 401) {
          return children;
        }
      }
    });
  return children;
}

export default ProtectedRoute;
