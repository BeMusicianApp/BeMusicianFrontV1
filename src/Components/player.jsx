
import "../css/caroussel.css";
import { useState, useEffect, Component, Fragment } from "react";
import "../musicfont/styles.css";
import {getMusiqueToPlay } from "../api/backend/musique";
import {animAB, animBC, animCD} from "./player/AnimFunction/animAsc"
import { animDC, animCB, animBA } from "./player/AnimFunction/animDesc";
import { reset } from "./player/playerFunctions/reset";
import { pause } from "./player/playerFunctions/pause";


export function Caroussel(props){
    const [loadingState, setLoadingState] = useState('loading');
    const [tabLinkAcc, setTabLinkAcc] = useState([]);
    const MusiqueSelected = sessionStorage.getItem("musicSelected")
    const [session, setSession] = useState({ state: 'loading'})
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getMusiqueToPlay(MusiqueSelected)
            return data.data   
        }
        fetchData().then(data => {
            console.log(data)
            const tabAcc = []
                data.forEach((item, index) => {
                    let AccordCharger = document.createElement('img');
                    //TODO fonction disable (display : disable)
                    AccordCharger.src = item.accordImage;
                    AccordCharger.className = "imgcar";
                    AccordCharger.alt = item.AccordName;
                    AccordCharger.id = index;
                    index = AccordCharger;
                    tabAcc.push(AccordCharger)
                    document.getElementById("content").appendChild(AccordCharger);
                })
                setTabLinkAcc(tabAcc)
                setSession({state: 'ready'})
        })
    }, []);
    

    
    let counter = 17;
    let counterInit = 0
    let counterAB = 0
    let counterDepart = 4

    function decompte(){
        counterAB = sessionStorage.getItem('counterAB')
        console.log("counterAB",counterAB)
        counter--;
        if (counter === 16) {
            if (counterInit === 0 && counterAB==0) {
                animAB(tabLinkAcc[counterAB]); //1er index du tabPartition
                counterAB++
                counterDepart--
            }
            else if (counterAB >= tabLinkAcc.length-1){     //FIN1
                animBC(tabLinkAcc[counterAB - 1]);          //index de A=>B précédent
                animCD(tabLinkAcc[counterAB - 2]);
                counterAB++ 
            }
            else {
                animAB(tabLinkAcc[counterAB]);    //nouvel index       
                animBC(tabLinkAcc[counterAB - 1]);  //index de A=>B précédent
                animCD(tabLinkAcc[counterAB - 2]); // index de B=>C précédent  
                counterAB++
            }
        }
        else if (counter === 12) {
            if (counterInit === 0) {
                animAB(tabLinkAcc[counterAB]);     // 2eme index du tabPartition
                animBC(tabLinkAcc[counterAB - 1]);   // 1eme index du tabPartiton
                counterAB++
                counterDepart--
            }
            else if (counterAB >= tabLinkAcc.length){// Fin 1
                    //index de A=>B précédent
                    animCD(tabLinkAcc[counterAB - 2]);
                    pause()
                }
                else if (counterAB >= tabLinkAcc.length-1){ // FIN 2
                    animBC(tabLinkAcc[counterAB - 1]);          //index de A=>B précédent
                    animCD(tabLinkAcc[counterAB - 2]);
                    counterAB++ 
                }
            else {
                animAB(tabLinkAcc[counterAB]);            //nouvel index
                animBC(tabLinkAcc[counterAB - 1]);          //index de A=>B précédent
                animCD(tabLinkAcc[counterAB - 2]);          // index de B=>C précédent
                counterAB++
            }
        }
        else if (counter === 8) {
            if (counterAB >= tabLinkAcc.length-1) {  //FIN 3
                animBC(tabLinkAcc[counterAB - 1]);          //index de A=>B précédent
                animCD(tabLinkAcc[counterAB - 2]);           //index de B=>C précédent
                counterAB++
            }
            else if (counterAB >= tabLinkAcc.length){   // FIN 2
                animCD(tabLinkAcc[counterAB - 2]);
                pause()
            }
            else {
                animAB(tabLinkAcc[counterAB]);
                animBC(tabLinkAcc[counterAB - 1]);
                animCD(tabLinkAcc[counterAB - 2]);
                counterAB++
            }
        }
        else if (counter === 4) {
            if (counterAB >= tabLinkAcc.length) {             //FIN 3
                animCD(tabLinkAcc[counterAB - 2]);
                pause()
            }
            else {
                animAB(tabLinkAcc[counterAB]);
                animBC(tabLinkAcc[counterAB - 1]);
                animCD(tabLinkAcc[counterAB - 2]);
                counterAB++
            }
        }
        else if (counter === 1) {
            if (counterAB < tabLinkAcc.length+2) {
                counter = 17;
                counterInit++;
            }
            else {
                pause()
            }
        }
    }

    //let selection = document.getElementById("selectDifficulty");
    //let optiontest = selection.options[selection.selectedIndex].selected = true;

    let intervalId = null;
     //sessionStorage.getItem('intervalId')
    let optionInUse = 0;

    const start = () => {
        console.log("start", intervalId)
        let tempo = 0;
        let select = document.getElementById("selectDifficulty");
        let option = select.options[select.selectedIndex].value;

        intervalId = sessionStorage.getItem('intervalId')
        // console.log("intervalId avant les filtre2", intervalId)
        if(intervalId === null || intervalId === "null"){
            console.log("passe que si interval Id est null")
            tempo = option*300
            intervalId = setInterval(decompte, tempo);
            sessionStorage.setItem("intervalId", intervalId)
        }
        // else{
        //     //clearInterval(intervalId);
        //     if(intervalId===null){
        //             tempo = option*300
        //             intervalId = setInterval(decompte, tempo);
        //             sessionStorage.setItem("intervalId", intervalId)
        //             console.log("option!=optionInuse :", intervalId);
        //         }
        // }
    }



    let previewInit = 0;
    function preview(){
        pause();
        if(intervalId==null){           
            console.log("preview")
            if(counterAB == tabLinkAcc.length-1)
            {
                animDC(tabLinkAcc[counterAB-3]);
                counterAB = counterAB - 1;
                console.log("preview")
            }
            else if(counterAB == tabLinkAcc.length -2)
            {
                animDC(tabLinkAcc[counterAB-3]);
                animCB(tabLinkAcc[counterAB-2]);
                counterAB = counterAB - 1;

            }
            else
            {
                console.log("counterBefore : ", counterAB);
                animDC(tabLinkAcc[counterAB - 3]);
                animCB(tabLinkAcc[counterAB - 2]);
                animBA(tabLinkAcc[counterAB-1]);
                counterAB = counterAB-1;
                console.log("counterafter : ", counterAB);
            }
        }
    }

    function next(){
        pause();
       if(intervalId==null){ 
            if(counterAB==0)
            {
                animAB(tabLinkAcc[counterAB]);
                counterAB = counterAB + 1;
            }
            else if(counterAB==1)
            {
                animAB(tabLinkAcc[counterAB]);
                animBC(tabLinkAcc[counterAB-1]);
                counterAB = counterAB + 1;
            }
            else
            {
                animAB(tabLinkAcc[counterAB]);
                animBC(tabLinkAcc[counterAB-1]);
                animCD(tabLinkAcc[counterAB-2]);
                counterAB = counterAB + 1;
            }
        }
    }

    function mode(){
    //modifier les carte par le title
        
    }

    // if (session.state === 'loading') {
    //     console.log("1er return")
    //     return (
    //         <>
    //             <div>chargement...</div>
    //             <div id="content"></div>
    //         </>
    //     )
    // }

    // else if (session.state === 'ready') {
        return (
            <>
                <div className="playerCar">
                    <div className="blockajouer">
                    </div>
                        <div className="blockajouerbg"></div>
                    <div className="repaire"></div>
                    <div id="content">                        
                    </div>
                </div>
                <div className="playerOption">
                    <i className="icon-fast-backward" onClick={next}></i>
                    <i className="icon-primitive-square" onClick={()=>{reset(tabLinkAcc,counterAB,counter,counterInit,intervalId)}}></i>
                    <i className="icon-playback-play" onClick={start}></i>
                    <i className="icon-playback-pause" onClick={()=>{pause(intervalId)}}></i>
                    <i className="icon-fast-forward" onClick={preview}></i>
                    <select id="selectDifficulty" onChange={start}>
                            <option value="1" className="bpmOption" >Official Bpm -30</option>
                            <option value="2" className="bpmOption" >Official Bpm -20</option>
                            <option value="3" className="bpmOption" >Official Bpm -10</option>
                            <option value="4" className="bpmOption" >Official Bpm</option>
                            <option value="5" className="bpmOption" >Official Bpm +10</option>
                    </select>
                </div>
            </>
        );
   // }
};

