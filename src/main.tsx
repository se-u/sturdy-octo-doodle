import WebApp from "@twa-dev/sdk";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import AuthProvider from "./context/authContext";
import { Suspense } from "react";
import Loader from "@components/shared/Loader";

WebApp.ready();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <TonConnectUIProvider manifestUrl={manifestUrl}>
  //   <WalletProvider>
  //     <RecoilRoot>
  //       <PoinProvider>
  <AuthProvider>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </AuthProvider>
  //       </PoinProvider>
  //     </RecoilRoot>
  //   </WalletProvider>
  // </TonConnectUIProvider>
);
