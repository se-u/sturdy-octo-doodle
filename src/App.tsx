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
import SwapPoint from "@components/convert/SwapPoint.tsx";
import Login from "@components/login/Login.tsx";
import Setup from "@components/setup/Setup.tsx";
import UserProfile from "@components/profile/UserProfile.tsx";
import Home from "@components/home/Home.tsx";
import { path } from "@modules/constant";
import {
  MobileLayout,
  MobileLayoutMinimal,
} from "@components/layouts/mobile/MobileLayout.tsx";
import ConvertList from "@components/convert/ConvertList.tsx";
import Deposit from "@components/deposit/Deposit.tsx";
import VolunteerLayout from "@components/layouts/mobile/VolunteerLayout.tsx";
import HomeVolunteer from "@components/volunteer/HomeVolunteer.tsx";
import BottleVerif from "@components/volunteer/BottleVerif.tsx";


const router = createBrowserRouter([
  {
    path: "*",
    element: <MobileLayoutMinimal />,
    children: [
      { path: "/*", element: <Login /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "/app/*",
    element: <MobileLayout />,
    children: [{ path: "*", element: <Dashboard /> }],
  },
  {
    path: "/volunteer/*",
    element: <VolunteerLayout/>,
    children: [{path: "*", element: <Volunteer/>}]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Volunteer(){
  return(
    <Routes>
        <Route path="/" element={<HomeVolunteer/>}/>
        <Route path="verif" element={<BottleVerif/>}/>
    </Routes>
  );
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
      <Route path="convert/:type" element={<ConvertList />} />
      <Route path="swapPoint/:type/:amount" element={<SwapPoint />} />
      <Route path="wallet/" element={<Wallet />} />
      <Route path={path.DEPOSIT} element={<Deposit/>} />
    </Routes>
  );
}
