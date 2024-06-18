import { account } from "@lib/appwrite";
import { path } from "@modules/constant";
import { Navigate } from "react-router-dom";

const createResource = () => {
  let result: unknown;
  let status = "initial";

  const promise = account
    .get()
    .then((response) => response)
    .then((data) => {
      result = data.name;
      status = "done";
    })
    .catch((error) => {
      result = error;
      status = "error";
    });

  return {
    read: () => {
      if (status === "initial") {
        throw promise;
      }

      if (status === "error") {
        throw result;
      }

      if (status === "done") {
        return result;
      }
    },
  };
};

const initialResource: { read: () => unknown } = createResource();

function ProtectedRoute({ children }: { children: React.ReactElement }) {
  try {
    const name = initialResource.read();
    if (name === "") return <Navigate to={path.SETUP} />;
  } catch (e) {
    return <Navigate to={path.LOGIN} />;
  }
  return children;
}

export default ProtectedRoute;
