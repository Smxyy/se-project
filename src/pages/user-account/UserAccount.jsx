import  {useState, useEffect, useRef} from 'react'
import { useParams, useNavigate } from "react-router-dom";
import {  PiMapPinLineLight } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { TfiPackage } from "react-icons/tfi";
import { GoCodeReview, GoHeart, GoSignOut } from "react-icons/go";
import Settings from '../settings/Settings';

export default function UserAccount() {
   //With backend
   //const [profileImage, setProfileImage] = useState("../../src/assets/umaru.jpg");

   //without backend
   // Retrieve the profile image from localStorage or use a default image
   const [profileImage, setProfileImage] = useState(
      () => localStorage.getItem("profileImage")
   );

   // Save the profile image to localStorage whenever it changes
   useEffect(() => {
      localStorage.setItem("profileImage", profileImage);
   }, [profileImage]);

   console.log("profileImage:",profileImage);

   if(profileImage == "blob:http://localhost:5173/46a9d9a9-8092-4b9a-9b10-c2832afc8a71")
   {
      setProfileImage("../../src/assets/umaru.jpg");
   }

   const param = useParams();
   console.log("param:", param);
   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
   const { settings } = useParams();
   const navigate = useNavigate();
   const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  useEffect(() => {
   const handleClickOutside = (event) => {
      // Check if the click is outside the sidebar
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
   };

    // Attach event listener only when the sidebar is open
   if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
   } else {
      document.removeEventListener("mousedown", handleClickOutside);
   }

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);
 
  const handleTabClick = (tab) => {
     const tabSlug = tab.toLowerCase().replace(" ", "-");
     navigate(`/account/${tabSlug}`);
  };

  const tabs = [
     { label: "Dashboard", slug: "dashboard", icon: <RxDashboard/> },
     { label: "My Orders", slug: "my-orders", icon: <TfiPackage/> },
     { label: "My Addresses", slug: "my-addresses", icon: <PiMapPinLineLight/> },
     { label: "Reviews", slug: "reviews", icon: <GoCodeReview/> },
     { label: "Wishlist", slug: "wishlist", icon: <GoHeart/> },
     { label: "Notifications", slug: "notifications", icon: <BsBell/> },
     { label: "My Profile", slug: "my-profile", icon:  <FiUser className="text-slate-800"/> },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignOut = () => {
    // Handle the sign-out logic
    alert("Signed out");
    setIsModalOpen(false);
  };  

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 navbar">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
         <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
            <button type="button" onClick={toggleSidebar}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
               <span className="sr-only">Open sidebar</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                     <path clipRule="evenodd" fillRule="evenodd" 
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                     </path>
                  </svg>
               </button>
            <a href="/" className="flex ms-2 md:me-24">
               <img src="../../src/assets/logo.png" className="h-20 me-3" alt="Readoria Logo" />
               <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Readoria</span>
            </a>
            </div>
            <div className="flex items-center">
      <div className="relative ms-3"> {/* Add `relative` to parent for positioning */}
         <button type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-expanded={isDropdownOpen} onClick={toggleDropdown}>
            <span className="sr-only">Open user menu</span>
            <img className="w-12 h-12 rounded-full object-cover" src={profileImage} alt="user photo"/>
         </button>
      {/* user's name */}
         <div
            id="dropdown-user"
            className={`absolute right-0 z-50 w-48 mt-2 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 ${
            isDropdownOpen ? "block" : "hidden"
            }`}>
            <div className="px-4 py-3" role="none">
            <p className="text-sm text-gray-900 dark:text-white ps-5" role="none">
               username
            </p>
            {/* <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300 ps-4" role="none">
               user@gmail.com
            </p> */}
            </div>
            <ul className="py-1" role="none">
            <li>
               <a
                  href="/account/my-orders"
                  className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem">
                     <TfiPackage/>
                     My Orders
               </a>
            </li>
            <li>
               <a
                  href="/account/my-profile"
                  className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem">
                  <FiUser className="text-slate-800"/>
                  My Profile
               </a>
            </li>
            <li>
               <a
                  href="#"
                  className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem">
                     <GoSignOut/>
                  Sign out
               </a>
            </li>
            </ul>
         </div>
      </div>
      </div>

         </div>
      </div>
      </nav>
      {/* Sidebar */}
      <aside ref={sidebarRef} className={`fixed top-0 left-0 z-40 w-64 h-screen pt-32 mt-2 transition-transform ${
         isSidebarOpen ? "translate-x-0" : "-translate-x-full"
         } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 sidebar`} aria-label="Sidebar">
         <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
            {tabs.map((tab) => (
                  <li
                     key={tab.slug}
                     onClick={() => handleTabClick(tab.label)}
                     className={`cursor-pointer flex items-center p-2 gap-4 rounded-lg  group ${
                        param.settings === tab.slug ? "bg-emerald-100 text-green-800" : "hover:bg-gray-100 text-gray-800 "
                     }`}>
                     {tab.icon}
                     {tab.label}
                  </li>
               ))}
               <li> 
               <button
              onClick={() => setIsModalOpen(true)}
              className="flex gap-4 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-full"
            >
              <GoSignOut />
              <span>Sign Out</span>
            </button>
               </li>
            </ul>
         </div>
      </aside>
      {/* Main */}
      <main className="px-8 py-4 sm:ml-64 bg-slate-100 min-h-screen">
         <div className="py-6 px-2 mt-24">
         <Settings url={settings || "dashboard"}  profileImage={profileImage} setProfileImage={setProfileImage} />
         </div>
      </main>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Confirm Sign Out
            </h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to sign out?
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleSignOut}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
