import { Navigate, Outlet, useLocation } from "react-router-dom";
import { path } from "@modules/constant";
import TopAppBar from "@components/layouts/mobile/TopBar";
import BottomNav from "@components/layouts/mobile/BottomNav";
import { AuthService } from "@modules/authService";

function MobileLayout() {
  // const isAuthenticated = AuthService.isAuthenticated();
  const { pathname } = useLocation();
  // if (!isAuthenticated) {
  //   return <Navigate to={path.LOGIN} />;
  // }

  return (
    <div className="bg-primary-900 w-screen h-screen font-dmsans">
      <div className="relative bg-white  max-w-sm mx-auto h-screen">
        <div className="overflow-y-scroll h-screen ">
          <TopAppBar />
          <div className="px-3  py-4 mb-24">
            <Outlet />
          </div>
        </div>
        <div className="absolute bottom-0 z-50 w-full">
          {pathname === path.HOME ? <BottomNav /> : null}
        </div>
      </div>
    </div>
  );
}

function MobileLayoutMinimal() {
  const isAuthenticated = AuthService.isAuthenticated();
  if (isAuthenticated) {
    return <Navigate to={path.HOME} />;
  }
  return (
    <div className="bg-primary-900 w-screen h-screen font-dmsans">
      <div className="relative bg-white  max-w-sm mx-auto h-screen">
        <div className="overflow-y-scroll h-screen ">
          <div className="px-3  py-4 mb-24">
            <Outlet />
          </div>
        </div>
        <div className="absolute bottom-0 z-50 w-full"></div>
      </div>
    </div>
  );
}

export { MobileLayout, MobileLayoutMinimal };
