import { useState, useEffect } from "react";
import "../css/player.css";
import { Caroussel } from "../Components/player";
import { Provider } from "react-redux";
import { store } from '../Components/player/redux-store-player/counterTab';

const PlayScreen = () => {

    let musiqueRow = sessionStorage.getItem('musicSelectedInfo').split(',');
    console.log("name : ",musiqueRow)

    return ( 
        <>
        <Provider store={store}>
        <div className="playerMain">
            <div className="playerSecond text-xl">{musiqueRow[0]}</div>
            <div className="playerSecond text-lg">{musiqueRow[1]}</div>  
            <div className="conseil">A vous de jouer ! <br />
                    attendre que l'accord soit arrivé dans le cadre pour jouer
            </div>
                <Caroussel/>
        </div>

        </Provider>
        </>
    );
};

export default PlayScreen;