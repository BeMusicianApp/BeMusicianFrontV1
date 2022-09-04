import { useState, useEffect } from "react";
import "../css/player.css";
import { Caroussel } from "../Components/player";
import {Fetchmusique} from "../Components/fetchmusique"
import { Accord } from "../Models/accord.model";

const PlayScreen = () => {

    let localdataName = sessionStorage.getItem('nameLocal');
    console.log("name : ",localdataName)

    return ( 
        <>
        <div className="playerMain">
            <div className="playerSecond">{localdataName}</div> 
            <div className="conseil">A vous de jouer ! <br />
                    attendre que l'accord soit arrivé dans le cadre pour jouer
            </div>
                <Caroussel/>
        </div>
        </>
    );
};

export default PlayScreen;