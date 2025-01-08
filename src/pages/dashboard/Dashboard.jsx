/* eslint-disable react/prop-types */
import { CiEdit } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import {  PiMapPinLineLight } from "react-icons/pi";
import { TfiPackage } from "react-icons/tfi";
import { GoCodeReview, GoHeart } from "react-icons/go";

export default function Dashboard({ profileImage, setProfileImage }) {
  const navigate = useNavigate();
  const tabs = [
    { label: "My Orders", slug: "my-orders", icon: <TfiPackage /> },
    { label: "My Addresses", slug: "my-addresses", icon: <PiMapPinLineLight /> },
    { label: "Reviews", slug: "reviews", icon: <GoCodeReview /> },
    { label: "Wishlist", slug: "wishlist", icon: <GoHeart /> },
  ];
  const handleOnClick = (tab) => {
   navigate(`/account/${tab}`);
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the uploaded file
      setProfileImage(imageUrl); // Update the state in UserAccount
    }
  };

  const handleClickImage = () => {
    document.getElementById("image_file").click(); // Trigger file input click programmatically
  };

  return (
    <div className="flex flex-col gap-8">
      <section className="bg-white rounded-md p-8">
        <p className="text-xl font-semibold">Dashboard</p>      
        <div className="flex flex-col items-center gap-4 pt-10 lg:pt-16">
        <div className="flex flex-col items-center">
          <img className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full cursor-pointer"
            src={profileImage} alt="Profile" onClick={handleClickImage}/>
          <input id="image_file" type="file" accept="image/*" onChange={handleImageChange} style={{ display: "none" }}/>
        </div>
          <div className="font-medium text-center mb-8">
            <div>Jese Leos</div>
            <div className="text-primary">&quot;Live in where you shine&quot;</div>
            <div onClick={()=>handleOnClick("my-profile")} className="flex justify-center text-sm text-slate-400 hover:text-secondary grouppt-4 gap-2 items-center cursor-pointer">
              <CiEdit className="text-xl"/>
              <p>Edit Profile</p> 
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-between text-lg text-gray-700 gap-9">
      {tabs.map((tab) => (
        <div
          key={tab.slug}
          className="flex-1 bg-white flex gap-4 items-center py-6 ps-8 rounded-md shadow-sm group cursor-pointer"
          onClick={() => handleOnClick(tab.slug)}>
          <div className="text-slate-500 text-[50px] group-hover:text-primary">
            {tab.icon}
          </div>
          <div>
            <p className="font-medium group-hover:text-primary">{tab.label}</p>
            <p className="text-sm text-slate-400 group-hover:text-primary">
              {tab.label === "My Orders" ? "Orders (3)" : ""}
              {tab.label === "Wishlist" ? "Books (3)" : ""}
              {tab.label === "My Addresses" ? "Addresses (3)" : ""}
              {tab.label === "Reviews" ? "Reviews (3)" : ""}
            </p>
          </div>
        </div>
      ))}
    </section>
    </div>
  )
}
