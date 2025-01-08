// import React from 'react';
import { MdOutlineNavigateNext } from "react-icons/md"; 
import Dashboard from '../dashboard/Dashboard';
import MyProfile from '../my-profile/MyProfile';
import MyAddresses from '../my-addresses/MyAddresses';
import MyOrders from '../my-orders/MyOrders';
import Notifications from '../../components/notifications/Notifications';
import Wishlist from '../../components/wishlist/WishList';
import Reviews from '../../components/review/Reviews';
import Invoice from '../invoice/Invoice';

// eslint-disable-next-line react/prop-types
export default function Settings({ url, profileImage, setProfileImage }) {
  console.log("url: ", url);
  const renderComponent = () => {
    switch (url) {
      case "dashboard":
        return <Dashboard profileImage={profileImage} setProfileImage={setProfileImage} />;
      case "my-profile":
        return <MyProfile profileImage={profileImage} setProfileImage={setProfileImage} />;
      case "my-addresses":
        return <MyAddresses profileImage={profileImage} setProfileImage={setProfileImage} />;
      case "my-orders":
        return <MyOrders profileImage={profileImage} setProfileImage={setProfileImage} />;
      case "reviews":
        return <Reviews profileImage={profileImage} setProfileImage={setProfileImage} />;
      case "notifications":
        return <Notifications profileImage={profileImage} setProfileImage={setProfileImage} />;
      case "wishlist":
        return <Wishlist profileImage={profileImage} setProfileImage={setProfileImage} />;
      case "invoice":
        return <Invoice profileImage={profileImage} setProfileImage={setProfileImage} />;
      default:
        return <p>Component not found</p>; // Fallback
    }
  };
  return (
    <div className="flex flex-col gap-8">
      <div className='flex gap-2 text-slate-800 bg-white px-8 py-4 rounded-md'>
        <a href="/">Home</a>
        <MdOutlineNavigateNext className='mt-1'/> 
        <p>My Account</p> 
        <MdOutlineNavigateNext className='mt-1'/>
        {/* eslint-disable-next-line react/prop-types */}
        <a href={`/account/${url}`} className="capitalize">{url.replace("-", " ")}</a>        
      </div>
      <div className="">
      {renderComponent()}
        {/* <h1 className="text-xl font-bold">Settings</h1>
        <p className="mt-2 text-gray-600 capitalize">You selected: {tab}</p> */}
      </div>
    </div>
  );
}
