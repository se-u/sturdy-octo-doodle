import { Outlet } from "react-router-dom";
import TopBarVolunteer from "./TopBarVolunteer";

export default function VolunteerLayout() {
  return (
    <>
      <div className="bg-primary-900 w-screen h-screen font-dmsans">
        <div className="relative bg-white  max-w-sm mx-auto h-screen">
          <div className="overflow-y-scroll h-screen ">
            <TopBarVolunteer />
            <div className="px-3  py-4 mb-24">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
