import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CardKid({ cardKid }){
    const bookTitle = cardKid.title.replaceAll(" ", "-").toLowerCase();
    return(
        <section>
            <Link to={`/book/${bookTitle}`}>
            <div className="w-full h-auto p-3 cursor-pointer font-OpenSans shadow-none flex flex-row bg-gray-200 overflow-hidden">
                <div className="bg-gray-50">
                    <img className="w-40 h-52 p-5 transform scale-110 transition-transform duration-500 hover:scale-100" src={cardKid.imgSrc} alt="image" />
                </div>
                <div className="flex flex-col items-start justify-center ml-4">
                <p className="font-normal text-gray-500 flex">
                    By <p className="hover:text-secondary ml-1">{cardKid.name}</p>
                </p>
                <h5 className="text-xl py-2 font-bold tracking-tight text-black">
                    {cardKid.title}
                </h5>
                <p className="font-normal text-lg text-gray-500">
                    {cardKid.price} USD
                </p>
                </div>
            </div>
            </Link>
        </section>
    );
}