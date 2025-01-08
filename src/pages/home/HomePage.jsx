import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { FaCarSide } from "react-icons/fa";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdPayments } from "react-icons/md";
import CardKid from "../../components/cardKid/CardKid";
import { Link, useLocation, useParams } from "react-router-dom";
import Collection from "./Collection";
import CardPage from "../../components/card/CardPage";

const slides = [
  {
    id: 1,
    title: "Discover Our Latest Book Collections",
    subtitle: "Unveiling Ancient Narratives and Forgotten Tales: Rediscover History's Rich Tapestry through the Lens of Words and Wonder.",
    buttonText: "Explore Now",
    image: "src/assets/image.png",
  },
  {
    id: 2,
    title: "Journey Through Landscapes",
    subtitle: "Embark on a captivating exploration of timeless stories and untold adventures. Traverse the world’s greatest narratives, from epic quests to intimate character studies, all woven into the fabric of literary brilliance.",
    buttonText: "Start Reading",
    image: "src/assets/image1.png",
  },
  {
    id: 3,
    title: "Unlock the Secrets of the Written Word",
    subtitle: "Delve into the mysteries of language and imagination with stories that transcend time and place. Discover powerful narratives that invite you to reflect, dream, and connect with the world in new, unexpected ways.",
    buttonText: "Learn More",
    image: "src/assets/image2.png",
  },
];

const arrSlides = [
    { title: "Thriller", subtitle: "Learning Resources", icon: "✍️" },
    { title: "Textbook", subtitle: "Learning Resources", icon: "📋" },
    { title: "Fantasy", subtitle: "Learning Resources", icon: "💫" },
    { title: "Documentary", subtitle: "Learning Resources", icon: "📄" },
    { title: "Fantasy", subtitle: "Learning Resources", icon: "💫" },
    { title: "Documentary", subtitle: "Learning Resources", icon: "📄" },
];

const cards = [
    { id: 1, actor: "Kok Sokna", description: "Conditionally render components or apply logic based on the current URL path.", price:"2.00", image: "src/assets/image2.png" },
    { id: 2, actor: "Card 2", description: "Description 2", price:"2.00", image: "src/assets/image2.png" },
    { id: 3, actor: "Card 3", description: "Description 3", price:"2.00", image: "src/assets/image2.png" },
    { id: 4, actor: "Card 4", description: "Description 4", price:"2.00", image: "src/assets/image2.png" },
    { id: 5, actor: "Card 5", description: "Description 1", price:"2.00", image: "src/assets/image2.png" },
    { id: 6, actor: "Card 6", description: "Description 2", price:"2.00", image: "src/assets/image2.png" },
    { id: 7, actor: "Card 7", description: "Description 3", price:"2.00", image: "src/assets/image2.png" },
    { id: 8, actor: "Card 8", description: "Description 4", price:"2.00", image: "src/assets/image2.png" },
];

const cardKids = [
    { id: 1, name: "kok ko", title: "Play Time", price: "$10.00", imgSrc:"src/assets/image.png" },
    { id: 2, name: "kok ko", title: "Play Time", price: "$10.00", imgSrc:"src/assets/image.png" },
    { id: 3, name: "kok ko", title: "Play Time", price: "$10.00", imgSrc:"src/assets/image.png" },
    { id: 4, name: "kok ko", title: "Play Time", price: "$10.00", imgSrc:"src/assets/image.png" },
    { id: 5, name: "kok ko", title: "Play Time", price: "$10.00", imgSrc:"src/assets/image.png" },
    { id: 6, name: "kok ko", title: "Play Time", price: "$10.00", imgSrc:"src/assets/image.png" },
    { id: 7, name: "kok ko", title: "Play Time", price: "$10.00", imgSrc:"src/assets/image.png" },
    { id: 8, name: "kok ko", title: "Play Time", price: "$10.00", imgSrc:"src/assets/image.png" },
    { id: 9, name: "kok ko", title: "Play Time", price: "$10.00", imgSrc:"src/assets/image.png" },
];

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
      description:
        "Guaranteed secure payment process for your peace of mind always.",
    },
];

export default function HomePage(){
    
    const [currentSlide, setCurrentSlide] = useState(0);

    const [activeIndex, setActiveIndex] = useState(0);

    const visibleCards = 4;

    const slidePrev = () => {
        setActiveIndex((prevIndex) =>
        prevIndex === 0 ? cards.length - visibleCards : prevIndex - 1
        );
    };

    const slideNext = () => {
        setActiveIndex((prevIndex) =>
        prevIndex + visibleCards >= cards.length ? 0 : prevIndex + 1
        );
    };

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval); // Cleanup
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const { activeRender } = useParams();
    const location = useLocation(); // Get current location

    const menuItems = [
        { title: "new-arrival", label: "New Arrivals" },
        { title: "best-seller", label: "Best Sellers" },
        { title: "featured", label: "Featured" },
    ];

    const handleCardAction = (card) => {
        console.log("Card action triggered:", card);
    };

    // Fallback to default menu item for the home page
    const activeMenu = activeRender || (location.pathname === "/" ? "new-arrival" : null);

    return (
    
        <section>
            <section>
                <div className="relative w-full h-screen overflow-hidden">
                    <div className="absolute inset-0 flex transition-transform duration-1000" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {slides.map((slide) => (
                        <div key={slide.id} className="w-full h-full font-Poppins flex-shrink-0 flex items-center justify-center bg-[url('../src/assets/bg-image.png')] bg-cover bg-center">
                            <div className="grid grid-cols-2 text-white">
                                <div className="ml-36 mt-16">
                                    <h1 className="text-5xl font-bold mb-4 uppercase leading-normal">{slide.title}</h1>
                                    <p className="text-lg font-extralight font-OpenSans mb-6">{slide.subtitle}</p>
                                    <button className="px-6 py-3 bg-secondary hover:bg-yellow-500 text-white rounded-full transition">
                                        {slide.buttonText}
                                    </button>
                                </div>
                                <div className="ml-60">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="h-[450px] -mt-2 w-auto object-contain transition-opacity duration-1000"
                                    />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-10 h-3 rounded-full ${currentSlide === index ? "bg-green-500" : "bg-gray-400"}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                        ))}
                    </div>
                </div>
            </section>
            
            <section>
                <div className="w-full py-16 flex flex-col justify-center items-center">
                    <div className="w-10/12 mx-auto mt-10 relative transition-transform duration-500">

                        <div className="w-full p-5 border-2 border-gray-200 rounded-full items-center text-center overflow-hidden">
                            <div className="flex items-center justify-start w-1/2 p-10"
                                style={{
                                    transform: `translateX(-${activeIndex * 100}%)`,
                                }}
                            >
                                {arrSlides.map((slide) => (
                                    <div key={slide.id} className="w-1/2 ml-5 flex-shrink-0 items-center text-center">
                                        <div className="flex font-OpenSans font-body text-black">
                                            <div className="w-14 h-14 text-h2 flex items-center justify-center rounded-full bg-black">{slide.icon}</div>
                                            <div className="ml-4 text-start">
                                                <h3 className="text-h4">{slide.title}</h3>
                                                <p className="text-sm">{slide.subtitle}</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="absolute inset-0 flex">
                            <div className="flex items-center justify-start w-1/2">
                                <button
                                className="bg-white text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6"
                                onClick={() => setActiveIndex((prevIndex) => prevIndex === 0 ? arrSlides.length - 1 : prevIndex - 1)}
                                >
                                &#8592;
                                </button>
                            </div>
                            <div className="flex items-center justify-end w-1/2">
                                <button
                                className="bg-white text-teal-500 hover:text-orange-500 font-bold hover:shadow rounded-full w-12 h-12 -mr-6"
                                onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % arrSlides.length)}
                                >
                                &#8594;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex flex-col mb-16 font-OpenSans">
                    <h1 className="mx-auto text-h1 uppercase font-bold text-black">Deals Of The Week</h1>
                    <p className="w-2/5 text-center text-xl mx-auto pt-2 text-gray-600">Explore our handpicked selections ranging from timeless literature to contemporary bestsellers across.</p>
                </div>
            </section>

            <section>
                <div className="w-full flex flex-col mb-16 justify-center items-center">
                    <div className="w-10/12 mx-auto relative">
                        
                        <div className="overflow-hidden">
                            <div className="grid grid-flow-col gap-6 transition-transform duration-500"
                            style={{
                                transform: `translateX(-${activeIndex * (100 / visibleCards)}%)`
                            }}
                            >
                                {cards.map((card) => (
                                    <CardPage key={card.id} card={card} onAction={handleCardAction} />
                                ))} 
                            </div>
                        </div>

                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <button
                                className="bg-white text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -ml-6"
                                onClick={slidePrev}
                            >
                                &#8592;
                            </button>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <button
                                className="bg-white text-teal-500 hover:text-orange-500 font-bold hover:shadow-lg rounded-full w-12 h-12 -mr-6"
                                onClick={slideNext}
                            >
                                &#8594;
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-10/12 mx-auto">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="w-full h-1/2 col-span-2 relative font-bold font-OpenSans">
                            <img className="w-full rounded object-cover" src="src/assets/book.png" alt="image" />
                            <h1 className="w-2/3 absolute top-32 left-24 text-h2 text-white uppercase">BookShop TNC's Top 5 Most Memorable Moments</h1>
                            <p className="w-2/3 text-gray-100 font-light text-base absolute left-24 top-60">Explore BookShop TNC's unforgettable highlights, from author events to exclusive book launches and community celebrations.</p>
                            <button className="absolute flex left-24 top-80 px-6 py-3 text-lg font-normal bg-secondary hover:bg-yellow-500 text-white rounded-full transition">
                                Buy Now <BsChevronRight className="mt-1 ml-2"/>
                            </button>
                        </div>
                        <div className="w-full relative font-OpenSans">
                            <img className="w-full h-[91.5%] object-cover opacity-90" src="src/assets/english.png" alt="image" />
                            <h1 className="w-2/3 absolute top-20 left-10 font-bold text-h2 text-white uppercase">Big Discount</h1>
                            <p className="w-2/3 text-gray-100 font-medium text-base absolute left-10 top-32">50% Discount for new users</p>
                            <button className="absolute flex left-10 top-44 px-6 py-3 text-lg font-normal bg-secondary hover:bg-yellow-500 text-white rounded-full transition">
                                Buy Now <BsChevronRight className="mt-1 ml-2"/>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="flex flex-col mb-10 font-OpenSans">
                    <h1 className="mx-auto text-h1 uppercase font-bold text-black">Book Collections</h1>
                    <p className="w-2/5 text-center text-xl mx-auto pt-2 text-gray-600">Explore our handpicked selections ranging from timeless literature to contemporary bestsellers across diverse genres.</p>
                </div>

                <div className="w-1/3 font-Poppins text-h4 text-black mx-auto grid grid-cols-3 place-items-center place-content-center">
                    {menuItems.map((menuItem) =>(
                        <Link
                        key={menuItem.title}
                        to={`/${menuItem.title}`}
                        >
                            <div
                                className={`font-light py-3 px-4 rounded hover:bg-secondary hover:text-white 
                                    ${activeMenu === menuItem.title ? "bg-secondary text-white" : "bg-white"}`
                                }
                            >
                                {menuItem.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section>
                <div className="w-full pt-5 mb-6 flex flex-col justify-center items-center">
                    <Collection url={activeRender || "new-arrival"}/>
                </div>
            </section>

            <section>
                <div className="w-10/12 h-4/5 mb-14 mx-auto relative font-OpenSans">
                    <img className="w-full h-[540px] opacity-95 rounded-lg" src="src/assets/banner_image.png" alt="banner_image" />
                    <h1 className="w-1/3 absolute top-36 right-32 text-h1 font-bold text-white leading-snug">
                        GET 50% DISCOUNT ON YOUR FIRST ORDER!
                    </h1>
                    <p className="w-1/3 absolute top-64 right-32 text-lg text-white font-light">
                        Discover affordable reads under $50 at BookStore TNC! From gripping
                        mysteries to heartwarming romances.
                    </p>
                    <button className="absolute top-[68%] right-[32%] flex py-3 px-6 text-lg font-normal bg-secondary hover:bg-yellow-500 text-white rounded-full transition">
                        Buy Now <BsChevronRight className="mt-1 ml-2"/>
                    </button>
                </div>
            </section>

            <section>
                <div className="w-10/12 mx-auto mb-10 flex flex-row justify-between items-center border-b-2 pb-4 border-gray-100">
                    <h1 className="text-h1 uppercase font-bold text-black">Explore Our Kids' Books</h1>
                    <div className="flex justify-center">
                        <button className="flex py-2.5 px-6 text-lg font-normal text-black border-2 border-secondary hover:bg-secondary hover:text-white rounded-full transition">
                            Explore All <BsChevronRight className="mt-1 ml-2"/>
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div className="w-full mb-16 flex flex-col justify-center items-center">
                    <div className="w-10/12 mx-auto">
                        <div className="grid grid-cols-3 gap-4">
                            {cardKids.map((kids) => (
                                <CardKid key={kids.id} cardKid={kids}/>
                            ))} 
                        </div>
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