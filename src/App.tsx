import { useEffect } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";
import AppLayout from "./layouts/MobileLayout.tsx";
import Calculator from "./pages/Calculator.tsx";
import History from "./pages/History.tsx";
import Shop from "./pages/Shopping.tsx";
import Transaction from "./pages/transaction/transaction.tsx";
import Wallet from "./pages/Wallet.tsx";
// import Home from "./pages/home/HomeOld.tsx";
import { TestAppWrite } from "./pages/TestAppWrite.tsx";
import Home from "./pages/home/Home.tsx";
import Converting from "./pages/convert/converting.tsx";
import SwapPoint from "./pages/convert/SwapPoint.tsx";

// export default function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <RootLayout />,
//       children: [
//         {
//           path: "/",
//           element: <LandingPages />,
//         },
//         {
//           path: "*",
//           element: <FourOhFourOhFour />,
//         },
//       ],
//     },

//     {
//       path: "/app",
//       element: <AppLayout />,
//       children: [
//         {
//           path: "/app",
//           element: <Home />,
//         },
//         {
//           path: "/app/wallet",
//           element: <Wallet />,
//         },
//         {
//           path: "/app/history",
//           element: <History />,
//         },
//         {
//           path: "/app/wallet/import",
//           element: <ImportWallet />,
//         },
//         {
//           path: "/app/volunteer",
//           element: <ModeratUi />,
//         },
//         {
//           path: "/app/list-volunteer",
//           element: <ListVolunteer />,
//         },
//         {
//           path: "/app/calculator",
//           element: <Calculator />,
//         },
//         {
//           path: "/app/shop",
//           element: <Shopping />,
//         },
//         {
//           path: "/app/profile",
//           element: <MyProfile />,
//         },
//       ],
//     },
//     {
//       path: "*",
//       element: <FourOhFourOhFour />,
//     },
//     {
//       path: "/login",
//       element: <Login />,
//     },
//   ]);

//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const [_, setUserWalletState] = useRecoilState(userWallet);
//   const wallet = useTonWallet();
//   const client = useTonClient();
//   useEffect(() => {
//     if (!wallet) return;
//     if (!client) return;
//     const getBalance = async () => {
//       const balance = await client.getBalance(
//         Address.parse(wallet.account.address)
//       );
//       setUserWalletState((prevState) => {
//         return { ...prevState, tonBalance: Number(balance) / 1_000_0000_000 };
//       });
//     };

//     getBalance();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [wallet, client]);
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }
function TODO() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/app/home");
  });
  return <>{"Redirect"}</>;
}

const router = createBrowserRouter([
  { path: "*", element: <TODO /> },
  { path: "test/", element: <TestAppWrite /> },
  {
    path: "/app/*",
    element: <AppLayout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "calculator", element: <Calculator /> },
      { path: "shop", element: <Shop /> },
      { path: "history", element: <History /> },
      { path: "transaction", element: <Transaction/> },
      { path: "convert", element: <Converting/> },
      { path: "swapPoint", element: <SwapPoint/> },
      {
        path: "wallet/",
        element: <Wallet />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

// function Root() {
//   return (
//     <Routes>
//       <Route path="*" element={<AppLayout />} />
//       {/* <Route path="/" element={<Home />} /> */}
//     </Routes>
//   );
// }
