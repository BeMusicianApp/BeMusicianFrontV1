import { animDC, animCB,animBA } from '../AnimFunction/animDesc';
import { pause } from './pause';
import { useSelector } from 'react-redux';
export function previousAnim(tabLinkAcc,counterAB,intervalId) {
        pause();
        console.log("counterABprev", counterAB)
        if (intervalId == null) {
            //gestion d'animation du début du tableau
            if(counterAB<=tabLinkAcc.length){
                if (counterAB === 1) {
                    animBA(tabLinkAcc[counterAB - 1]);
                }
                else if (counterAB === 2) {
                    animCB(tabLinkAcc[counterAB - 2]);
                    animBA(tabLinkAcc[counterAB - 1]);
                    
                }
                else { 
                    animDC(tabLinkAcc[counterAB - 3]);
                    animCB(tabLinkAcc[counterAB - 2]);
                    animBA(tabLinkAcc[counterAB - 1]);
                }
            }
            //gestion d'animation de la fin du tableau
            else{
                if(counterAB==tabLinkAcc.length){
                    animDC(tabLinkAcc[counterAB - 3]);
                    animCB(tabLinkAcc[counterAB - 2]);
                    animBA(tabLinkAcc[counterAB - 1]);
                }
               if(counterAB==tabLinkAcc.length+1){
                    animCB(tabLinkAcc[counterAB - 2]);
                    animDC(tabLinkAcc[counterAB - 3]);
                }
                else if(counterAB==tabLinkAcc.length+2){
                        animDC(tabLinkAcc[counterAB - 3]);
                    }
            }
            
        }
    }
