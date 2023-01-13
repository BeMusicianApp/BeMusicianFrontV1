import { useDispatch, useSelector } from 'react-redux';
import { animAB, animBC,animCD } from '../AnimFunction/animAsc';
import { pause } from './pause';

export const nextAnim = (tabLinkAcc,counterAB,intervalId)=> {
    console.log("counterAB next",counterAB)
     pause();
    if (intervalId == null){
        if(counterAB<tabLinkAcc.length){
            if (counterAB == 0) {
                animAB(tabLinkAcc[counterAB]);
            }
            else if (counterAB == 1) {
                animAB(tabLinkAcc[counterAB]);
                animBC(tabLinkAcc[counterAB -1]);
            }
            else {
                animAB(tabLinkAcc[counterAB]);
                animBC(tabLinkAcc[counterAB - 1]);
                animCD(tabLinkAcc[counterAB - 2]);
            }
        }
        else{
            if(counterAB==tabLinkAcc.length){
                animBC(tabLinkAcc[counterAB - 1]);
                animCD(tabLinkAcc[counterAB - 2]);
            }
            if(counterAB==tabLinkAcc.length+1){
               
                animCD(tabLinkAcc[counterAB - 2]);
            }
        }
    }
   

    
 }