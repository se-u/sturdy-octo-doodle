import { Link, useNavigate } from "react-router-dom";
import { account } from "../../lib/appwrite";
import { path } from "../../modules/constant";
import { ArrowCircleLeft } from "iconsax-react";
import { useEffect, useState } from "react";
import { Models } from "appwrite";
import { AuthService } from "@modules/authService";

function UserProfile() {
  const [user, setUser] = useState<Models.User<Models.Preferences>>();
  const navigate = useNavigate();
  useEffect(() => {
    const get = async () => {
      try {
        const user = await account.get();
        setUser(user);
      } catch (error) {
        console.log("");
      }
    };
    get();
  });

  const handleLogout = async () => {
    await account.deleteSession("current");
    AuthService.clearToken();
    navigate(path.LOGIN);
  };
  if (!user) return null;
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <Link to={path.HOME}>
          <ArrowCircleLeft
            size={36}
            variant="Linear"
            className="text-black font-bold"
          />
        </Link>
      </div>
      <div className="mb-4 p-4 bg-white border-2 border-black rounded-md">
        <h2 className="text-3xl font-bold mb-4">User Profile</h2>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-semibold mb-1">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            value={"+" + formatPhoneNumber(user.phone)}
            disabled
            className="w-full p-2 border-2 border-black rounded-md bg-gray-100 text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={user.name}
            disabled
            className="w-full p-2 border-2 border-black rounded-md bg-gray-100 text-black"
          />
        </div>
        <p className="text-sm text-gray-700 mt-4">
          Last Accessed : {formatDate(user.accessedAt)}
        </p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-red-500 w-full text-white px-4 py-2 rounded-lg border-2 border-black hover:bg-red-700 transition-colors"
      >
        Log Out
      </button>
    </>
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

function formatDate(date: string) {
  const formatDate = new Date(date);
  return formatDate.toString();
}

export default UserProfile;
