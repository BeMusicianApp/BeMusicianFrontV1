import "../css/caroussel.css";
import { useState, useEffect, Component, Fragment } from "react";
import "../musicfont/styles.css";
import { getMusiqueToPlay } from "../api/backend/musique";
import { animAB, animBC, animCD } from "./player/AnimFunction/animAsc";
import { animDC, animCB,animBA } from './player/AnimFunction/animDesc';

import { resetAnim } from "./player/playerFunctions/reset";
import { pause } from "./player/playerFunctions/pause";
import { decompteAnim } from "./player/playerFunctions/decompte";
import { useDispatch, useSelector } from 'react-redux';
import { nextAnim } from "./player/playerFunctions/next";
import { previousAnim } from "./player/playerFunctions/previous";
import { startPlay } from "./player/playerFunctions/start";
import { startInterval, stopInterval, updateState } from "./player/redux-store-player/counterTab";
// import timeInterval from "./player/playerFunctions/timeInterval";


export function Caroussel() {
    const [loadingState, setLoadingState] = useState('loading');
    const [tabLinkAcc, setTabLinkAcc] = useState([]);
    const MusiqueSelected = sessionStorage.getItem("musicSelected")
    const [session, setSession] = useState({ state: 'loading' })
    const dispatch = useDispatch()
    //const counterAB = useSelector((state)=> state.counterTab.counterAB)
    let counterAB = 0
 
    useEffect(() => {
        
        const fetchData = async () => {
            const data = await getMusiqueToPlay(MusiqueSelected)
            return data.data
        }
        dispatch({type : 'counterTab/reset', payload:counterAB})
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
            setSession({ state: 'ready' })
        })
    }, []);

    let selection = document.getElementById("selectDifficulty");
    //let optiontest = selection.options[selection.selectedIndex].selected = true;

    let intervalId = null;
    //sessionStorage.getItem('intervalId')
    let optionInUse = 0;
    const start = () => {
        intervalId = setInterval(function(){play()},1000);
    }

    function play(){
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
    
    function next()
    {
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
    
    const stop = () => {
      dispatch(stopInterval());
    };

    function previous(){
        if (counterAB === 1) {
            animBA(tabLinkAcc[counterAB - 1]);
            counterAB--
        }
        else if (counterAB === 2) {
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
        resetAnim(tabLinkAcc,counterAB)
        counterAB = 0
    }

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
