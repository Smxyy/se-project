import { useState} from 'react'
import { MdOutlineNavigateNext } from "react-icons/md"; 
import { useParams } from 'react-router-dom';
// import { GoHeart, GoHeartFill } from "react-icons/go";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { TbFileDescription } from "react-icons/tb";
import { PiBooksLight } from "react-icons/pi";
import CustomerReviews from '../../components/review/CustomerReview';

export default function BookDetail() {
  const bookTitle = useParams().bookname.replaceAll("-", " ");
  const bookname = useParams();
  console.log("bookname", bookname);
  
  console.log("bookTitle: ", bookTitle);
  const [activeTab, setActiveTab] = useState("description");

  if (!bookname) {
    return <div>Book not found</div>;
  }

  const descriptionContent = (
    <div>
      <p>&quot;This captivating novel explores the depths of human emotion and the journey of self-discovery. Written by bestselling author John Doe, this book takes readers on a transformative adventure through time and culture.&quot;
      </p>
    </div>
  );

  const additionalInfoContent = (
    <div>
      <table className="w-full table-auto border border-gray-300">
        <tbody>
        <tr className="border-b border-gray-300">
            <td className="font-bold border-r border-gray-300 p-2">Categories</td>
            <td className="p-2">Adventure</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="font-bold border-r border-gray-300 p-2">Publisher</td>
            <td className="p-2">Penguin Books</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="font-bold border-r border-gray-300 p-2">Publication Date</td>
            <td className="p-2">March 1, 2022</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="font-bold border-r border-gray-300 p-2">ISBN</td>
            <td className="p-2">978-1234567890</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="font-bold border-r border-gray-300 p-2">Language</td>
            <td className="p-2">English</td>
          </tr>
          <tr className="border-b border-gray-300">
            <td className="font-bold border-r border-gray-300 p-2">Pages</td>
            <td className="p-2">350</td>
          </tr>
          <tr>
            <td className="font-bold border-r border-gray-300 p-2">Format</td>
            <td className="p-2">Paperback</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  const reviewsContent = (
    <div>
     <CustomerReviews/>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return descriptionContent;
      case "additional-info":
        return additionalInfoContent;
      case "reviews":
        return reviewsContent;
      default:
        return descriptionContent;
    }
  };
  return (
    <div className='bg-slate-100 pb-5 font-OpenSans'>
      <div className='h-[100px] max-w-full bg-primary mb-5 text-h1 font-h1 flex justify-center items-center text-black '>Unlock a world of books!</div>
        <div className="mx-auto max-w-screen-xl">
          <div className='flex gap-2 m-5 text-gray-600'>
            <a href="#">Categories</a>
            <MdOutlineNavigateNext className='mt-1'/> 
            <a href="#">Fiction</a> 
            <MdOutlineNavigateNext className='mt-1'/> 
            <a href="#">Fantasy</a>
          </div>
          {/* Book Image and some detail */}
          <section className="flex flex-col lg:flex-row gap-20 justify-center items-center font-OpenSans w-full px-5">
            {/* Book Image */}
            <div className="inline-block p-10 ms-5 border bg-white rounded-xl">
              <div className="relative">
                {/* <img src={`${book.image}`} alt={`${book.title}`} /> */}
                <img className="h-[500px] lg:h-[450px] w-auto" src="../../src/assets/playtime.png" alt="Book" />
                {/* <button className="absolute -top-[35px] border rounded-full -right-7" onClick={handleWishList}>
                {isWishlisted ? (
              <GoHeartFill className="h-5 w-5 m-1 text-red-500" />
            ) : (
              <GoHeart className="h-5 w-5 m-1 text-gray-200" />
            )}
                </button> */}
              </div>
            </div>
            {/* Book Detail */}
            <div className="text-gray-600">
              <h2 className="text-h2 text-black font-semibold">Fourth Wing</h2>
              <p className="text-gray-600">by: <span className="text-body text-black">Rebecca Yarros</span></p>
              <div className="my-4 flex gap-3 text-xl items-center text-yellow-300">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStarHalfAlt/> 
              <FaRegStar/>    
              <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">(3.5)</p>
              <a href="#review">
              <button className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white" onClick={() => setActiveTab("reviews")}>
                345 Reviews
              </button>
              </a>       
            </div>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="font-sans text-xl font-extrabold text-black sm:text-2xl dark:text-white">
                $ 12.00 USD
              </p>
            </div>
            <div className="my-6 sm:gap-4 sm:items-center sm:flex sm:my-8">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
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
              <hr className="my-5"/>
              <p className="max-w-prose pr-5 [1025px]:pr-0">Book Story: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ut suscipit reiciendis neque ad nisi vitae sequi illum aspernatur tenetur nulla ea autem quaerat iste ex, fugiat recusandae dolores ducimus?
              Vero ducimus ipsam magni minima sapiente veniam vitae velit, alias expedita omnis. Fuga alias at iusto quasi non voluptas dolorum porro distinctio harum quas! Nulla beatae nisi deserunt dolorem fugit!</p>
              {/* <button className="mt-5 p-5 bg-primary hover:bg-secondary hover:text-white rounded-lg font-medium font-stretch-expanded">Add to Cart</button>  */}
            </div>
          </section>
          {/* More Detail about that book */}
          <section className="mt-5">
            <div className="text-gray-600 py-3 px-5 border rounded-lg bg-white">
              <h4 className="text-h4 text-black">Book Details</h4>
              {/* Tab bars */}
              <div className="text-small font-medium text-gray-500 border-b border-gray-200 ">
              <ul className="flex flex-wrap -mb-px">
                <li className="me-2">
                  <button
                    className={`flex items-center gap-2 py-4 pe-4 border-b-2 ${
                      activeTab === "description" ? "text-gray-600 border-primary" : "border-transparent hover:text-gray-600 hover:border-secondary"
                    } rounded-t-lg`}
                    onClick={() => setActiveTab("description")}>
                    <TbFileDescription />
                    <p>Description</p>
                  </button>
                </li>
                <li className="me-2">
                  <button
                    className={`flex items-center gap-2 py-4 pe-4 border-b-2 ${
                      activeTab === "additional-info" ? "text-gray-600 border-primary" : "border-transparent hover:text-gray-600 hover:border-secondary"
                    } rounded-t-lg`}
                    onClick={() => setActiveTab("additional-info")}>
                    <PiBooksLight />
                    <p>Additional Information</p>
                  </button>
                </li>
                <li className="me-2">
                  <button id="review"
                    className={` flex items-center gap-2 py-4 pe-4 border-b-2 ${
                      activeTab === "reviews" ? "text-gray-600 border-primary" : "border-transparent hover:text-gray-600 hover:border-secondary"
                    } rounded-t-lg`}
                    onClick={() => setActiveTab("reviews")}>
                    <FaRegStar />
                    <p>Review</p>
                  </button>
                </li>
              </ul>
              <div className="m-4">{renderContent()}</div>
            </div>
            </div>
          </section>
        </div>
    </div>
  )
}
