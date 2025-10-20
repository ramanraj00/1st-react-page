import React from "react";
import { Link } from "react-router-dom";
import { ChampionsCard } from "../Data/ChampionsData";

 function ChampionsCardSlider(){
    return (
        <div>
            {ChampionsCard.map((card)=>(
                <div key={card.id}>
                <Link to ={card.path}>
                <img src={card.src} alt={card.alt}/>
                </Link>
                <p>{card.alt}</p>
        </div>
        ))}
       </div>
    );
}

export default ChampionsCardSlider;