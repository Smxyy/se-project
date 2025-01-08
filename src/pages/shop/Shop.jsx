import { useState } from "react";
import { FaCarSide } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import { BsChevronRight } from "react-icons/bs";
import { BsHeartFill, BsStarFill, BsFillBookmarkStarFill } from "react-icons/bs";
import { useParams, useNavigate, Link } from "react-router-dom";
import Category from "../shop/Category";

const features = [
  {
    icon: <FaCarSide/>,
    title: "Delivery in 2 Days",
    description: "Fast and reliable delivery within just two business days.",
  },
  {
    icon: <BsFillPatchCheckFill/>,
    title: "Free Shipping",
    description: "Free shipping on shipments of $50 or more.",
  },
  {
    icon: <MdPayments/>,
    title: "100% Secure Payment",
    description: "Guaranteed secure payment process for your peace of mind always.",
  },
];

const actors = [
  {
    image: "../src/assets/actor1.png",
    name: "John Doe",
  },
  {
    image: "../src/assets/actor1.png",
    name: "B. Simmons",
  },
  {
    image: "../src/assets/actor1.png",
    name: "Jane Cooper",
  },
  {
    image: "../src/assets/actor1.png",
    name: "Robert Fox",
  },
  {
    image: "../src/assets/actor1.png",
    name: "Floyd Mila",
  },
];

const cardItem = [
  {
    image: "../src/assets/kid-school.png",
    title: "Play Time",
    actor: "John Doe",
    price: 10.00,
  },
  {
    image: "../src/assets/kid-school.png",
    title: "Play Football",
    actor: "John Doe",
    price: 10.00,
  },
  {
    image: "../src/assets/kid-school.png",
    title: "Technology Kid",
    actor: "John Doe",
    price: 10.00,
  },
  {
    image: "../src/assets/kid-school.png",
    title: "Play Time",
    actor: "John Doe",
    price: 10.00,
  },
  {
    image: "../src/assets/kid-school.png",
    title: "Play Time",
    actor: "John Doe",
    price: 10.00,
  },
  {
    image: "../src/assets/kid-school.png",
    title: "Play Time",
    actor: "John Doe",
    price: 10.00,
  },
  {
    image: "../src/assets/kid-school.png",
    title: "Play Time",
    actor: "John Doe",
    price: 10.00,
  },
  {
    image: "../src/assets/kid-school.png",
    title: "Play Time",
    actor: "John Doe",
    price: 10.00,
  },
];

export default function Shop() {

  const { category, onAction } = useParams();

  const handleAction = () =>{
    onAction(category);
  }

  const bookTitle = category?.title?.replaceAll(" ", "-").toLowerCase();

  console.log("Generated Book Title:", bookTitle);

  const param = useParams();
  console.log("param:", param);
  const { categories } = useParams();

  const navigate = useNavigate();
  const [checkedItem, setCheckedItem] = useState(categories || null); // Pre-check based on URL param

  const recommend = [
    {title: "Top Sellers", navigated: "top-seller", icon: <BsStarFill/>},
    {title: "Featured Sellers", navigated: "featured-seller", icon: <BsFillBookmarkStarFill/>},
    {title: "Editor's Picks", navigated: "editor-pick", icon: <BsHeartFill/>},
  ]

  const tabContents = [
    {title: "Kid", navigated: "kid"},
    {title: "Fantasy", navigated: "fantasy"},
    {title: "Documentary", navigated: "documentary"},
    {title: "Mystery", navigated: "mystery"},
    {title: "Textbook", navigated: "textbook"},
    {title: "Thriller", navigated: "thriller"},
    {title: "Fiction", navigated: "fiction"},
    {title: "Romance", navigated: "romance"},
  ];

  const handleToggle = (tabName) => {
      // If the same item is clicked, uncheck it; otherwise, set it as checked
      setCheckedItem((prev) => (prev === tabName ? null : tabName));
  };

  const handleLinkClick = (tabName) => {
      // Programmatically navigate to the clicked tab's route
      navigate(`/shop/${tabName}`);
      handleToggle(tabName); // Also toggle the checkbox state
  };

  return (
    <section>
      <section>
        <div className="w-full bg-gray-50">
          <div className="w-full bg-white font-Poppins">
            <p className="w-10/12 mx-auto py-4">
              <Link to={"/"} className="hover:text-tertiary text-black text-lg mr-1">Home</Link>/
              <Link 
                to={"/shop"} 
                onClick={handleToggle}
                className="hover:text-tertiary text-black text-lg ms-1 mr-1"
              >
                {categories ? recommend.find((rec) => rec.navigated === categories)?.title || "Shop" : "Shop"}
              </Link>

              {/* Dynamically render the selected tab */}
              {tabContents.map((tab, index) => {
                if (tab.navigated === param.categories) {
                  return (
                    <span key={tab.navigated}>
                      {/* Add "/" before each subsequent tab */}
                      {index >= 0 && '/'}
                      <Link
                        to={`${tab.navigated}`}
                        className="text-black text-lg ms-1 font-medium hover:text-tertiary"
                      >
                        {categories ? tabContents.find((rec) => rec.navigated === categories)?.title || "Shop" : "Kid"}
                        {/* {tab.title} */}
                      </Link>
                    </span>
                  );
                }
                return null;
              })}
            </p>
          </div>

          <div className="w-10/12 mx-auto pt-12 pb-8 grid grid-cols-4 gap-x-5 font-OpenSans">
            <div className="flex flex-col items-start">

              <div className="mt-20">
                <p className="text-base text-gray-500 font-medium pb-5">Recommended Collections</p>
                {recommend.map((command) => {
                  return (
                    <Link
                    key={`/${command.navigated}`}
                    to={`/shop/${command.navigated}`}
                    onClick={() => handleToggle(command.navigated)} // Update the state
                    className={`flex text-gray-600 text-lg pb-4 ${param.categories === command.navigated ? "text-green-800" : "text-gray-800"}`}>
                      <div className="mr-2 text-2xl">{command.icon}</div>{command.title}
                    </Link>
                  );
                })}

              </div>

              <div className="w-full mt-20">
                <p className="text-h2 text-gray-600 font-small mb-5">Show all categories</p>
                <div className="flex flex-col p-6 bg-yellow-50 items-start justify-start">
                  
                {tabContents.map((tab) => (
                  <div key={`/${tab.navigated}`} className="flex p-2 items-start">
                    <input
                      type="checkbox"
                      className="mr-2 mt-1.5 focus:ring-0 text-secondary cursor-pointer"
                      checked={checkedItem === tab.navigated} // Only one is checked
                      onChange={() => {
                        navigate(tab.navigated); // Navigate to the link programmatically
                        handleToggle(tab.navigated)}} // Toggle the checkbox
                    />
                    <Link 
                      to={`${tab.navigated}`} // Client-side navigation
                      className={`text-gray-600 text-lg ${param.categories === tab.navigated ? "text-green-800" : "text-gray-800"}`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default navigation behavior
                        handleLinkClick(tab.navigated); // Manually navigate and toggle checkbox
                      }}
                    >
                      {tab.title}
                    </Link>
                  </div>
                ))}
                </div>
              </div>

              <div className="w-full mt-9">
                <p className="text-h2 text-gray-600 font-small py-4 mt-6">Filter by top Author</p>
                <div className="flex flex-col bg-yellow-50 p-8 items-start justify-start">
                  {actors.map((actor)=>(
                    <a key={actor} href="#" className="flex items-center justify-center py-3 text-gray-600 text-xl">
                      <img src={actor.image} alt="actor" className="w-12 h-12 rounded-full mr-3 text-2xl"/>
                      <p className="font-light hover:text-secondary">{actor.name}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <main  className="col-span-3 relative">
              <Category url={categories || "kid"} />
              
              <div className="col-span-3 relative">
                <img
                  className="w-full h-[350px] object-cover rounded-lg"
                  src="../src/assets/banner.png"
                  alt="banner"
                />
                <div className="absolute top-[9%] left-[20%] transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className="text-h1 text-white font-semibold mb-1">
                    Big Discount
                  </h1>
                  <p className="text-white text-lg mb-4">50% Discount for new users</p>
                  <a href="#">
                    <button className="flex bg-primary px-6 py-4 rounded-full font-semibold hover:bg-secondary hover:text-white">
                      Grab Now <BsChevronRight className="ms-2 text-lg mt-1" />
                    </button>
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-x-5 gap-y-12 pt-8">
                  {cardItem?.map((category) => {
                    const bookTitle = category.title?.replaceAll(" ", "-").toLowerCase() || "unknown-title";
                    return (
                      <div key={category.title || "default"} className="font-OpenSans font-light">
                        <Link
                          to={`/book/${bookTitle}`}
                          onClick={() => handleAction?.(category)}
                          className="w-auto flex items-center justify-center py-12 rounded-sm bg-white"
                        >
                          <img
                            className="w-52 h-64 object-fill transform scale-105 transition-transform duration-500 hover:scale-100"
                            src={category.image || "/path/to/default-image.jpg"}
                            alt={category.title || "Default Image"}
                          />
                        </Link>
                        <div className="pt-6">
                          <p className="pb-2">
                            By{" "}
                            <span className="text-black hover:text-primary">{category.actor || "Unknown"}</span>
                          </p>
                          <Link
                            to={`/book/${bookTitle}`}
                            onClick={() => handleAction?.(category)}
                            className="pb-2 text-black hover:text-secondary font-semibold text-h2"
                          >
                            {category.title || "Unknown Title"}
                          </Link>
                          <p className="text-h3 font-medium text-tertiary">
                            ${category.price?.toFixed(2) || "0.00"} USA
                          </p>
                        </div>
                      </div>
                    );
                  }) || <p>No items available</p>}
                </div>
              </div>
              <button className="pt-10 grid place-self-center">
                <a href="#" className="flex bg-primary hover:bg-secondary hover:text-white transform scale-95 transition-transform duration-500 hover:scale-100 py-3 px-6 rounded text-lg font-OpenSans">
                Next <BsChevronRight className="ms-1 mt-1"/>
                </a>  
              </button>
            </main>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full flex flex-row justify-between items-center gap-8 px-6 py-12 bg-gray-50">
          {features.map((feature, index) => (
            <div
              key={index}
              className="mx-auto cursor-pointer flex flex-col items-center gap-4 text-center"
            >
              <div className="bg-gray-200 p-4 rounded-full">{feature.icon}</div>
              <div className="w-2/3">
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}