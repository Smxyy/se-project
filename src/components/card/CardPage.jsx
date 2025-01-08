import { Card } from "flowbite-react";
import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function CardPage({card, onAction}){

    // Add static item to wishlist
    const handleAction = (card) => {
        onAction(card);
    };

    const bookTitle = card?.actor?.replaceAll(" ", "-").toLowerCase() || "unknown";

    return (
        <section className="mx-auto">
            <Card className="w-[310px] border-none shadow-none bg-gray-100 font-OpenSans">
                <Link to={`/book/${bookTitle}`}>
                    <div className="w-full relative overflow-hidden bg-gray-50 flex justify-center items-center cursor-pointer">
                        <img
                            className="w-auto h-64 object-contain py-8 transform scale-110 transition-transform duration-500 hover:scale-100"
                            src={card.image}
                            alt={card.title}
                        />
                    </div>
                    <div className="mt-2.5 flex items-center text-tertiary text-base">
                        <p>{card.actor}</p>
                    </div>
                    <a href="#">
                        <h5 className="text-lg font-semibold text-start text-black mt-2 line-clamp-2">
                        {card.description}
                        </h5>
                    </a>
                </Link>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-3xl font-bold text-black">${card.price}</span>
                    <button
                    className="rounded-lg bg-secondary px-6 py-3 text-center text-lg font-medium text-white hover:bg-yellow-500 transform scale-100 hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-0 focus:ring-cyan-300"
                    onClick={()=>handleAction(card)} // This will add the item to the wishlist
                    >
                        <BsCart3/>
                    </button>
                </div>
            </Card>
        </section>
    );
}