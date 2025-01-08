import { BsChevronRight } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";

const cardItem = [
    {
      image: "../src/assets/kid.png",
      title: "Play Time",
      actor: "John Doe",
      price: 10.00,
    },
    {
      image: "../src/assets/kid.png",
      title: "Play Time",
      actor: "John Doe",
      price: 10.00,
    },
    {
      image: "../src/assets/kid.png",
      title: "Play Time",
      actor: "B. Simmons",
      price: 10.00,
    },
    {
      image: "../src/assets/kid.png",
      title: "Play Time",
      actor: "B. Simmons",
      price: 10.00,
    },
    {
      image: "../src/assets/kid.png",
      title: "Play Time",
      actor: "Jane Cooper",
      price: 10.00,
    },
    {
      image: "../src/assets/kid.png",
      title: "Play Time",
      actor: "Jane Cooper",
      price: 10.00,
    },
    {
      image: "../src/assets/kid.png",
      title: "Play Time",
      actor: "Robert Fox",
      price: 10.00,
    },
    {
      image: "../src/assets/kid.png",
      title: "Play Time",
      actor: "Robert Fox",
      price: 10.00,
    },
  ];

export default function KidPage() {

  const { category, onAction } = useParams();
  const handleAction = () => {
    onAction(category);
  }
  const bookTitle = category?.title?.replaceAll(" ", "-").toLowerCase();
  console.log("Generated Book Title:", bookTitle);


  return (
    <>
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
          {cardItem.map((category, index) => {
            const bookTitle = category.title?.replaceAll(" ", "-").toLowerCase() || "unknown-title";
            return(
              <div key={`${category.title}-${index}`} className="font-OpenSans font-light">
                <Link
                  to={`/book/${bookTitle}`}
                  onClick={() => handleAction?.(category)}
                  className="w-auto flex items-center justify-center py-12 rounded-sm bg-white"
                >
                  <img
                    className="w-52 h-64 object-fill transform scale-105 transition-transform duration-500 hover:scale-100"
                    src={category.image}
                    alt="Image_Card"
                  />
                </Link>
                <div className="pt-6">
                  <p className="pb-2">
                    By{" "}
                    <span className="text-black hover:text-primary">
                      {category.actor}
                    </span>
                  </p>
                  <Link
                    to={`/book/${bookTitle}`}
                    onClick={() => handleAction?.(category)}
                    className="pb-2 text-black hover:text-secondary font-semibold text-h2"
                  >
                    {category.title}
                  </Link>
                  <p className="text-h3 font-medium text-tertiary">
                    ${category.price.toFixed(2)} USA
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
