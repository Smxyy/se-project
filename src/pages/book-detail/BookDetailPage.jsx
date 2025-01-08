import React, { useState } from 'react'
import { MdOutlineNavigateNext } from "react-icons/md"; 
import { useParams } from 'react-router-dom';
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";

export default function BookDetailPage({book}) {
  const bookTitle = useParams().bookname.replaceAll("-", " ");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const handleWishList = () =>
  {
    setIsWishlisted((prev) => !prev);
  }
  console.log("bookTitle: ", bookTitle);

  return (
  <section className="bg-gray-50 pb-5 text-gray-600">
    <div className='h-[100px] max-w-full bg-primary text-h1 font-h1 flex justify-center items-center text-black '>Unlock a world of books!</div>
    <div className="mx-auto max-w-screen-xl pb-3">
      <div className='flex gap-2 m-5 text-gray-600'>
        <a href="#">Categories</a>
        <MdOutlineNavigateNext className='mt-1'/> 
        <a href="#">Fiction</a> 
        <MdOutlineNavigateNext className='mt-1'/> 
        <a href="#">Fantasy</a>
      </div>
    </div>
    <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
      <div className="lg:grid lg:grid-cols-2 lg:gap-5 xl:gap-10 items-center">
        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
          <div className="inline-block border p-10 transition-all duration-300 bg-white rounded-xl ">
            <img className="w-full lg:h-[500px] dark:hidden" src="../../src/assets/playtime.png" alt={`${bookTitle}`} />
            <img className="w-full hidden dark:block" src="../../src/assets/playtime.png" alt={`${bookTitle}`} />
          </div>
        </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-2xl font-semibold text-black sm:text-h2 dark:text-white">
              Play Time
            </h1>
            <p className="text-gray-600 mt-1">by: <span className="text-body text-black">Rebecca Yarros</span></p>
            <div className="my-4 flex gap-3 text-xl items-center text-yellow-300">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStarHalfAlt/> 
              <FaRegStar/>    
              <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">(3.5)</p>
              <a href="#" className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white">
                345 Reviews
              </a>       
            </div>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-xl font-extrabold text-black sm:text-2xl dark:text-white">
                $ 12.00 USD
              </p>
            </div>
            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
              <a href="#" title=""
                className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text- focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-secondary text-black hover:text-white focus:z-10 focus:ring-4 focus:ring-orange-300"
                role="button">
                <svg
                  className="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"                   
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"/>
                </svg>
                  Add to favorites
              </a>
              <a href="#" title=""
                className="text-black hover:text-white mt-4 sm:mt-0 bg-primary hover:bg-secondary focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center justify-center"
                role="button">
                <svg
                  className="w-5 h-5 -ms-2 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"/>
                </svg>
                  Add to cart
              </a>
            </div>
            <hr className="my-6 md:my-8 border-gray-200 " />
            <p className="mb-6 text-gray-500 dark:text-gray-400">
              Studio quality three mic array for crystal clear calls and voice
              recordings. Six-speaker sound system for a remarkably robust and
              high-quality audio experience. Up to 256GB of ultrafast SSD storage.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
              Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
              Magic Keyboard or Magic Keyboard with Touch ID.
            </p>
          </div>
      </div>
      <div className="mt-3">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="me-2">
              <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
            </li>
            <li className="me-2">
              <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Dashboard</a>
            </li>
            <li className="me-2">
              <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
            </li> 
            <li className="me-2">
              <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contacts</a>
            </li>
            <li>
              <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}
