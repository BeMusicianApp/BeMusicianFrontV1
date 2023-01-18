import "../css/caroussel.css";
import { useState, useEffect, Component, Fragment } from "react";
import "../musicfont/styles.css";
import { getMusiqueToPlay, getOneMusique } from "../api/backend/musique";
import { animAB, animBC, animCD } from "./player/AnimFunction/animAsc";
import { animDC, animCB,animBA } from './player/AnimFunction/animDesc';
import { resetAnim } from "./player/playerFunctions/reset";
//import { pause } from "./player/playerFunctions/pause";
import { decompteAnim } from "./player/playerFunctions/decompte";
import { useDispatch, useSelector } from 'react-redux';
import { nextAnim } from "./player/playerFunctions/next";
import { previousAnim } from "./player/playerFunctions/previous";
//import { startPlay } from "./player/playerFunctions/start";
import { startInterval, stopInterval, updateState } from "./player/redux-store-player/counterTab";
import Range from "./player/playerFunctions/playerComposant/range";

export function Caroussel() {
    const [loadingState, setLoadingState] = useState('loading');
    const [tabLinkAcc, setTabLinkAcc] = useState([]);
    const MusiqueSelected = sessionStorage.getItem("musicSelected");
    const [session, setSession] = useState({ state: 'loading' });
    let [Bpm, setBpm] = useState(0);

    let counterAB = 0
    console.log(Bpm)
    useEffect(() => {
        const fetchData = async () => {
            const data = await getMusiqueToPlay(MusiqueSelected)
            const data2 = await getOneMusique(MusiqueSelected)
            const dataAll = {data , data2}
            return dataAll
        }
        fetchData().then(data => {
            console.log(data.data.data)
            const tabAcc = [];
            data.data.data.forEach((item, index) => {
                let AccordCharger = document.createElement('img');
                AccordCharger.src = item.accordImage;
                AccordCharger.className = "imgcar";
                AccordCharger.alt = item.AccordName;
                AccordCharger.id = index;
                index = AccordCharger;
                tabAcc.push(AccordCharger);
                document.getElementById("content").appendChild(AccordCharger);
            })
            setTabLinkAcc(tabAcc);
            setBpm(data.data2.data.bpm)
            setSession({state: 'ready' });
        })
    }, []);

    let intervalId = null;

    const tempoSelect = (e) =>{
        const selectedBpm = e.target.value;
        console.log(selectedBpm);
        Bpm=selectedBpm;
        pause(intervalId)
        startPlay=false
        start()
    }

    let startPlay = false
    const start = () => {
        if(startPlay==false){
           
            const tempo = Math.round(60000/Bpm)
            console.log(tempo)
            intervalId = setInterval(function(){play()},tempo);
            startPlay=true
        }
    }

    let mesure = 17
    function play(){
        console.log(mesure)
        mesure--
        if(mesure>1){
            if(mesure%4==0){
                if (counterAB === 0){
                    animAB(tabLinkAcc[counterAB]);
                    return counterAB++
                    }
                else if(counterAB===1){
                    animAB(tabLinkAcc[counterAB]);
                    animBC(tabLinkAcc[counterAB - 1]);
                    return counterAB++
                }
                else{
                    animAB(tabLinkAcc[counterAB]);
                    animBC(tabLinkAcc[counterAB - 1]);
                    animCD(tabLinkAcc[counterAB - 2]);
                    return counterAB++;
                }
        }
        }else{
            mesure=17
        }
    }
    
    function next()
    {
        pause(intervalId)
        startPlay=false
        if (counterAB === 0){
            animAB(tabLinkAcc[counterAB]);
            counterAB++
            }
        else if(counterAB===1){
            animAB(tabLinkAcc[counterAB]);
            animBC(tabLinkAcc[counterAB - 1]);
            counterAB++
        }
        else{
            animAB(tabLinkAcc[counterAB]);
            animBC(tabLinkAcc[counterAB - 1]);
            animCD(tabLinkAcc[counterAB - 2]);
            counterAB++;
        }
    }

    function previous(){
        pause(intervalId)
        startPlay=false
        if (counterAB === 1){
            animBA(tabLinkAcc[counterAB - 1]);
            counterAB--
        }
        else if(counterAB === 2){
            animCB(tabLinkAcc[counterAB - 2]);
            animBA(tabLinkAcc[counterAB - 1]);
            counterAB--
            
        }
        else { 
            animDC(tabLinkAcc[counterAB - 3]);
            animCB(tabLinkAcc[counterAB - 2]);
            animBA(tabLinkAcc[counterAB - 1]);
            counterAB--
        }
    }
   
    function reset(){
        resetAnim(tabLinkAcc,counterAB);
        pause(intervalId)
        counterAB = 0;
        startPlay=false;
    }

    function pause(){
        clearInterval(intervalId);
        console.log("startPlay",startPlay)
        startPlay=false
        intervalId = null;
        sessionStorage.setItem("intervalId", intervalId)
    }

    console.log(session.state)
    if(session.state==="loading"){
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
                <i className="icon-primitive-square" onClick={reset}></i>
                <i className="icon-playback-play" onClick={start}></i>
                <i className="icon-playback-pause" onClick={() => {pause(intervalId, startPlay)}}></i>
                <i className="icon-fast-forward" onClick={previous}></i>
                <div className="flex flex-col item-align-center">
                    <input id="selectTempo" className="ml-8 w-20" defaultValue={Bpm} min="40" max="200" step="0.5" type="range"></input>
                </div>
            </div>
        </>
            
        )
    }
    else if(session.state==="ready"){
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
                    <i className="icon-primitive-square" onClick={reset}></i>
                    <i className="icon-playback-play" onClick={start}></i>
                    <i className="icon-playback-pause" onClick={() => {pause(intervalId)}}></i>
                    <i className="icon-fast-forward" onClick={previous}></i>
                    <div className="flex flex-col item-center">
                        {/* <label>Bpm : {Bpm}</label> */}
                        <Range Bpm={Bpm} setBpm={setBpm} tempoSelect={tempoSelect}/>
                        {/* <input id="selectTempo" className="ml-8 w-20" onChange={tempoSelect} defaultValue={Bpm} min="40" max="200" step="0.5" type="range"></input> */}
                    </div>
                </div>
            </>
        );
   }
};

    // function next() {
    //     if(counterAB>=0 && counterAB<=tabLinkAcc.length+1){
    //         console.log('next' ,counterAB)
    //         dispatch({type : "counterTab/increment", payload:counterAB})
    //         nextAnim(tabLinkAcc, counterAB,intervalId)
    //     }
    // }

        // function previous() {
    //     if(counterAB>0 && counterAB<=tabLinkAcc.length+2){
    //         dispatch({type : "counterTab/decrement", payload:counterAB})
    //         previousAnim(tabLinkAcc, counterAB,intervalId)
    //     }
    // }

        // function reset(){
    //     dispatch({type : 'counterTab/reset', payload:counterAB})
    //     resetAnim(tabLinkAcc,counterAB)
    // }

       // const start = () => {
    //     console.log("counter start", counterAB)
    //     // let tempo = 0;
    //     let select = document.getElementById("selectDifficulty");
    //     //let option = select.options[select.selectedIndex].value;
    //     intervalId = sessionStorage.getItem('intervalId')
    //     if (intervalId === "null") {
    //         intervalId = setInterval(() => {
    //             if(intervalId!='null'){
    //                 counter--;
    //                 if (counter%4==0||counter%3==0){
    //                     console.log("nextAnimMain", counterAB)
    //                     dispatch({type : "counterTab/increment", payload:counterAB})
    //                     next()
    //                 }
    //                 else if(counter==1){
    //                     counter=17
    //                 }
    //             }
    //           }, 1000);
    //         // intervalId = setInterval(function () {Decompte(tabLinkAcc, counterAB ,counter, counterInit,counterDepart)}, 1000);
    //         sessionStorage.setItem("intervalId", intervalId)
    //     }
    // }