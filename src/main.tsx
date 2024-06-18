import WebApp from "@twa-dev/sdk";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import AuthProvider from "./context/authContext";
import { Suspense } from "react";
import Loader from "@components/shared/Loader";

import ErrorBoundary from "@modules/ErrorBoundary";


WebApp.ready();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <TonConnectUIProvider manifestUrl={manifestUrl}>
  //   <WalletProvider>
  //     <RecoilRoot>
  //       <PoinProvider>


  <ErrorBoundary>
    <AuthProvider>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </AuthProvider>
  </ErrorBoundary>

  //       </PoinProvider>
  //     </RecoilRoot>
  //   </WalletProvider>
  // </TonConnectUIProvider>
);
