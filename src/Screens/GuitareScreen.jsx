import { useEffect, useState } from "react";
import Search from '../Components/Search';
import "../css/search.css";
import { getAllMusique } from "../api/backend/musique";
import { useNavigate } from "react-router-dom";
import { URL_PLAYER } from "../constants/urls/urlFrontEnd";
import pause from "../Components/player/playerFunctions/pause"

const GuitareScreen = () => {

    const [loader, setLoader] = useState({state : false})
    const navigate = useNavigate()
    const [musiqueList, setMusiqueListe] = useState([]);
    let intervalId = sessionStorage.getItem("intervalId")
    useEffect(() =>{
        const fetchData = async () => {
           const musiqueData = await getAllMusique()
               setMusiqueListe(
                   musiqueData.data,
               )
             setLoader({
                  state : true
              })
        }
        fetchData()
        clearInterval(intervalId)
    }, []);



    function goToPlay(musicSelected){
        sessionStorage.setItem("musicSelected", musicSelected.Id_musique)
        sessionStorage.setItem("musicSelectedInfo", [musicSelected.artiste,musicSelected.titre])
        navigate(URL_PLAYER, musicSelected.Id_musique)
    }
    //todo tmusique sur le onClick et importe le authprovider
if(loader.state===false){ 
    return (
        <div>
            Chargement...
        </div>
    )
    }
if(loader.state === true){

    return (
            <>
            <div className="grid grid-cols-2 sm:grid-cols-5">

            {musiqueList?.map((item) =>{
                return(
                    <div key={item.Id_musique} onClick={()=>{goToPlay(item)}}>
                        <div className="m-4 hover:scale-110 duration-300 hover:saturate-200">
                        <img src={item.image}/>
                        <div className ="text-white text-center font-bold" id={item.Id_musique}>
                            {item.artiste}
                        </div>
                        <div className ="text-white text-center" id={item.Id_musique}>
                            {item.titre}
                        </div>
                        </div>
                    </div>
                )
            })}
            </div>
            </> 
    )
}
};
export default GuitareScreen;