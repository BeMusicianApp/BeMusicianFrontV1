import { animCA, animDA, animBA } from "../AnimFunction/animReset";
import { pause } from "./pause";

export const resetAnim =(tabLinkAcc,counterAB)=>{
        pause()
        if(counterAB===1){
            animBA(tabLinkAcc[counterAB]);
            animCA(tabLinkAcc[counterAB - 1]);
        }
        else if(counterAB>1){
            animBA(tabLinkAcc[counterAB]);
            animCA(tabLinkAcc[counterAB - 1]);
            animDA(tabLinkAcc[counterAB - 2]);     
        }
    }