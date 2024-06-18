import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Calculator from "./pages/Calculator.tsx";
import Shop from "./pages/Shopping.tsx";
import Transaction from "./components/transaction/Transaction.tsx";
import Wallet from "./pages/Wallet.tsx";
import Converting from "@components/convert/converting.tsx";
import SwapPoint from "@components/convert/SwapPoint.tsx";
import Login from "@components/login/Login.tsx";
import Setup from "@components/setup/Setup.tsx";
import UserProfile from "@components/profile/UserProfile.tsx";
import Home from "@components/home/Home.tsx";
import {
  MobileLayout,
  MobileLayoutMinimal,
} from "@components/layouts/mobile/MobileLayout.tsx";

const router = createBrowserRouter([
  {
    path: "*",
    element: <MobileLayoutMinimal />,
    children: [{ path: "login", element: <Login /> }],
  },
  {
    path: "/app/*",
    element: <MobileLayout />,
    children: [{ path: "*", element: <Dashboard /> }],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Dashboard() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="setup" element={<Setup />} />
      <Route path="profile" element={<UserProfile />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="shop" element={<Shop />} />
      <Route path="transaction" element={<Transaction />} />
      <Route path="convert" element={<Converting />} />
      <Route path="swapPoint" element={<SwapPoint />} />
      <Route path="wallet/" element={<Wallet />} />
    </Routes>
  );
}
