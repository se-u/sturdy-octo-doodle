import { Link, useNavigate } from "react-router-dom";
import { account } from "../../lib/appwrite";
import { path } from "../../modules/constant";
import { ArrowLeft, Mobile } from "iconsax-react";
import { Suspense } from "react";
import { AuthService } from "@modules/authService";
// import wrapPromise from "@modules/wrapPromise";
import useSWR from "swr";

// function fetchDetail() {
//   const promise = account.get().then((res) => res);
//   return wrapPromise(promise);
// }

// const resource = fetchDetail();
const fetcher = () => {
  return account.get().then((res) => res);
};
function UserProfile() {
  // const user = resource.read();
  const { data } = useSWR("USER", fetcher, {
    suspense: true,
  });
  const user = data;
  const navigate = useNavigate();
  const handleLogout = async () => {
    await account.deleteSession("current");
    AuthService.clearToken();
    navigate(path.LOGIN);
  };
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <div className="flex items-center gap-4">
      <Link to={path.HOME}>
        <ArrowLeft
          size={36}
          variant="Linear"
          className="text-green  font-black"
        />
      </Link>
      <h2 className="font-bold text-2xl text-green">Profile</h2>
      </div>
      <div className="h-96 mt-16 flex flex-col justify-between">
        <div className="flex flex-col justify-center text-center ">
          <img src="/user_blue.svg" className="h-36" alt="" />
          <h1 className="font-bold text-2xl text-green mt-8">{user.name}</h1>
          <div className="flex justify-center items-center font-medium gap-1">
            <Mobile
              size={18}
              variant="Linear"
              className="text-black font-bold"
            />
            <span>{"+" + formatPhoneNumber(user.phone)}</span>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 w-full text-white px-4 py-2 rounded-lg border-2 border-black hover:bg-red-700 transition-colors"
        >
          Log Out
        </button>
      </div>
    </Suspense>
  );
}

function formatPhoneNumber(phoneNumber: string) {
  // Remove any non-digit characters
  phoneNumber = phoneNumber.replace(/\D/g, "");

  // Check the length of the phone number
  if (phoneNumber.length === 10) {
    // Format as US number: XXX XXX XXXX
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
  } else if (phoneNumber.length === 11 && phoneNumber.startsWith("1")) {
    // Format as US number with country code: 1 XXX XXX XXXX
    return phoneNumber.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");
  } else if (phoneNumber.length === 11) {
    // Format as UK number: XXXX XXX XXXX
    return phoneNumber.replace(/(\d{4})(\d{3})(\d{4})/, "$1 $2 $3");
  } else if (phoneNumber.length === 12) {
    // Format as international number: XX XXXX XXXX
    return phoneNumber.replace(/(\d{2})(\d{4})(\d{4})/, "$1 $2 $3");
  } else {
    // Default format if the length doesn't match known patterns
    return phoneNumber.replace(/(\d{3})(?=\d)/g, "$1 ");
  }
}

// function formatDate(date: string) {
//   const formatDate = new Date(date);
//   return formatDate.toString();
// }

export default UserProfile;
