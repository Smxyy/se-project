import { BsChevronRight } from "react-icons/bs";
import CardPage from "../../../components/card/CardPage";

const cards = [
    { id: 1, actor: "Koo Ko", description: "The text will display up to 2 lines. If the text exceeds 2 lines, the rest will be truncated with an ellipsis (...), ensuring a clean and consistent layout.", price:"2.00", image: "src/assets/image2.png" },
    { id: 2, actor: "Card 2", description: "Description 2", price:"2.00", image: "src/assets/image2.png" },
    { id: 3, actor: "Card 3", description: "Description 3", price:"2.00", image: "src/assets/image2.png" },
    { id: 4, actor: "Card 4", description: "Description 4", price:"2.00", image: "src/assets/image2.png" },
    { id: 5, actor: "Card 5", description: "Description 1", price:"2.00", image: "src/assets/image2.png" },
    { id: 6, actor: "Card 6", description: "Description 2", price:"2.00", image: "src/assets/image2.png" },
    { id: 7, actor: "Card 7", description: "Description 3", price:"2.00", image: "src/assets/image2.png" },
    { id: 8, actor: "Card 8", description: "Description 4", price:"2.00", image: "src/assets/image2.png" },
];

export default function NewArrival(){

    const handleCardAction = (card) => {
        console.log("Card action triggered:", card);
    };

    return(
        <section>
            <div className="w-11/12 py-7 mx-auto">
                <div className="grid grid-cols-4 gap-x-12 gap-y-6">
                    {cards.map((card) => (
                        <CardPage key={card.id} card={card} onAction={handleCardAction} />
                    ))} 
                </div>
                <div className="flex justify-center mt-14">
                    <button className="flex py-3 px-6 text-lg font-normal bg-secondary hover:bg-yellow-500 text-white rounded-full transition">
                        Explore All <BsChevronRight className="mt-1 ml-2"/>
                    </button>
                </div>
            </div>
        </section>
    );
}