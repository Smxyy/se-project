import { useState } from "react";
import NewArrival from "./book-home/NewArrival";
import BestSeller from "./book-home/BestSeller";
import Featured from "./book-home/Featured";
import { useParams } from "react-router-dom";

export default function Collection(){

    const { activeRender } = useParams();
    console.log("log: ",activeRender);

    const render = () => {
        switch (activeRender){
            case "new-arrival":
                return <NewArrival />;
            case "best-seller":
                return <BestSeller />;
            case "featured":
                return <Featured />;
            default:
                return <NewArrival />;
        }
    }

    return(
        <div>{render()}</div>
    );
}