import "../css/caroussel.css";
import { useState, useEffect, Component, Fragment } from "react";
import "../musicfont/styles.css";
import { getMusiqueToPlay, getOneMusique } from "../api/backend/musique";
import { animAB, animBC, animCD } from "./player/AnimFunction/animAsc";
import { animDC, animCB,animBA } from './player/AnimFunction/animDesc';
import { resetAnim } from "./player/playerFunctions/reset";
import {GiMetronome} from "react-icons/gi"
// import { pauseOnload } from "./player/playerFunctions/pause";
// import { decompteAnim } from "./player/playerFunctions/decompte";
// import { useDispatch, useSelector } from 'react-redux';
// import { nextAnim } from "./player/playerFunctions/next";
// import { previousAnim } from "./player/playerFunctions/previous";
//import { startPlay } from "./player/playerFunctions/start";
// import { startInterval, stopInterval, updateState } from "./player/redux-store-player/counterTab";
import Range from "./player/playerFunctions/playerComposant/range";

export function Caroussel() {
    const [loadingState, setLoadingState] = useState('loading');
    const [tabLinkAcc, setTabLinkAcc] = useState([]);
    const MusiqueSelected = sessionStorage.getItem("musicSelected");
    const [session, setSession] = useState({ state: 'loading' });
    let [Bpm, setBpm] = useState(0);
    let intervalId = sessionStorage.getItem("intervalId");
    let counterAB = 0;
    const [ScreenUser, setScreenUser] = useState(window.innerWidth);
    // const metronomeUp = new Audio('../data/sound/metronome/metronomeUp.mp3');
    const metronumeDown = new Audio('../data/sound/metronome/metronomeDown.mp3');
    window.addEventListener("resize",(e)=>{
        if(window.innerWidth>480){
            const Screen = 481;
            reset()
            setScreenUser(Screen)
        }
        else{
            const Screen = 480;
            reset()
            setScreenUser(Screen)
        }
    })

    // console.log(ScreenUser)
    useEffect(() => {
        const fetchData = async () => {
            const data = await getMusiqueToPlay(MusiqueSelected)
            const data2 = await getOneMusique(MusiqueSelected)
            const dataAll = {data , data2}
            return dataAll
        }
        fetchData().then(data => {
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

    const tempoSelect = (e) =>{
        const selectedBpm = e.target.value;
        Bpm=selectedBpm;
        pause(intervalId)
        startPlay=false
        start()
    }

    let startPlay = false
    const start = () => {
        intervalId = sessionStorage.getItem('intervalId');
        if(startPlay===false){
            if(intervalId==="null"){
                const tempo = Math.round(60000/Bpm);
                intervalId = setInterval(()=>{
                    play()
                    metronome("start")
                },tempo);
                sessionStorage.setItem("intervalId", intervalId)
                startPlay=true;
            }else{
                pause()
                const tempo = Math.round(60000/Bpm);
                intervalId = setInterval(()=>{
                    play()
                    metronome("start")
                },tempo);
                sessionStorage.setItem("intervalId", intervalId)
                startPlay=true;
            }
        }
    }

                
    const metronome =(props)=>{        
        let checkbox = document.getElementById("CheckboxMetronome");
        let icon = document.getElementById("IconMetronome");
        
        if(checkbox.checked===true){
            icon.className = "text-green-900";
            if(props==="start"){
                metronumeDown.play()
            }
        }
        else{
            icon.className ="text-red-900"
        }
    }
   
    let mesure = 17
    function play(){
        mesure--
        intervalId = sessionStorage.getItem("intervalId");
        if(mesure>=0){
            if(mesure%4==0){
                if (counterAB === 0){
                    animAB(tabLinkAcc[counterAB], ScreenUser);
                    return counterAB++
                    }
                else if(counterAB===1){
                    animAB(tabLinkAcc[counterAB], ScreenUser);
                    animBC(tabLinkAcc[counterAB - 1], ScreenUser);
                    return counterAB++
                }
                else{
                    animAB(tabLinkAcc[counterAB], ScreenUser);
                    animBC(tabLinkAcc[counterAB - 1], ScreenUser);
                    animCD(tabLinkAcc[counterAB - 2], ScreenUser);
                    return counterAB++;
                }
            }
            else{
            }
        }else{
            mesure=15;
        }
    }
    
    function next()
    {
        pause(intervalId)
        startPlay=false
        if (counterAB === 0){
            animAB(tabLinkAcc[counterAB], ScreenUser);
            counterAB++
            }
        else if(counterAB===1){
            animAB(tabLinkAcc[counterAB], ScreenUser);
            animBC(tabLinkAcc[counterAB - 1], ScreenUser);
            counterAB++
        }
        else{
            animAB(tabLinkAcc[counterAB], ScreenUser);
            animBC(tabLinkAcc[counterAB - 1], ScreenUser);
            animCD(tabLinkAcc[counterAB - 2], ScreenUser);
            counterAB++;
        }
    }

    function previous(){
        pause(intervalId)
        startPlay=false
        if (counterAB === 1){
            animBA(tabLinkAcc[counterAB - 1], ScreenUser);
            counterAB--
        }
        else if(counterAB === 2){
            animCB(tabLinkAcc[counterAB - 2], ScreenUser);
            animBA(tabLinkAcc[counterAB - 1], ScreenUser);
            counterAB--
            
        }
        else { 
            animDC(tabLinkAcc[counterAB - 3], ScreenUser);
            animCB(tabLinkAcc[counterAB - 2], ScreenUser);
            animBA(tabLinkAcc[counterAB - 1], ScreenUser);
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
        startPlay=false;
        intervalId = null;
        sessionStorage.setItem("intervalId", intervalId)
    }

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
                <div className="itemPlayer flex">
                            <label htmlFor="CheckboxMetronome" className="bg-red-900 transition-300"> <GiMetronome id="IconMetronome"/></label>
                            <input type="checkBox" id="CheckboxMetronome" onClick={metronome}/>
                        </div>
                <div className="flex flex-col item-align-center">
                    <input id="selectTempo" className="ml-8 w-20" defaultValue={Bpm} min="40" max="170" step="0.5" type="range"></input>
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
                    <div className="h-8 mb-2 flex">
                        <i className="icon-fast-backward" onClick={next}></i>
                        <i className="icon-primitive-square" onClick={reset}></i>
                        <i className="icon-playback-play" onClick={start}></i>
                        <i className="icon-playback-pause" onClick={() => {pause(intervalId)}}></i>
                        <i className="icon-fast-forward" onClick={previous}></i>
                        <div className="itemPlayer flex">
                            <label htmlFor="CheckboxMetronome" id="IconMetronome" className="text-red-900"> <GiMetronome/></label>
                            <input type="checkBox" id="CheckboxMetronome" onClick={metronome}/>
                        </div>
                    </div>
                        <Range Bpm={Bpm} setBpm={setBpm} tempoSelect={tempoSelect}/>
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