import { useState, useEffect } from "react";
import "../css/player.css";
import { Caroussel } from "../Components/caroussel";
import {Fetchmusique} from "../Components/fetchmusique"
import { Accord } from "../Models/accord.model";

const PlayScreen = () => {


    return ( 
        <>
        <div className="playerMain">
                <div className="playerSecond">{}</div> 
                <Caroussel/>
        </div>
        </>
    );
};

export default PlayScreen;