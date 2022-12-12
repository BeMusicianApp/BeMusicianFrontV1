import { animBA } from "../AnimFunction/animDesc";
import { animCA, animDA } from "../AnimFunction/animReset";
import { animAB, animBC,animCD } from "../AnimFunction/animAsc";

export const reset =(tabLinkAcc,counterAB,counter,counterInit,intervalId)=>{
    clearInterval(intervalId);
    intervalId = null;
    
    animBA(tabLinkAcc[counterAB]);
    animCA(tabLinkAcc[counterAB - 1]);
    animDA(tabLinkAcc[counterAB - 2]);     

    counter = 17;
    counterAB = 0;
    sessionStorage.setItem("counterAB",counterAB)
    counterInit = 0

    animAB(null);
    animBC(null);
    animCD(null);

        
}