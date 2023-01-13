import { animAB, animBC,animCD } from "../AnimFunction/animAsc";
import { pause } from "./pause";

let counter = 17
let counterInit = 0
let counterDepart = 4

export const decompteAnim =(tabLinkAcc,counterAB) => {
    console.log("counterDecompte" , counterAB)
    
    if (counterAB === 1){
        animAB(tabLinkAcc[counterAB]);
        }
    else if(counterAB===2){
        animAB(tabLinkAcc[counterAB]);
        animBC(tabLinkAcc[counterAB - 1]);
    }
    else{
        animAB(tabLinkAcc[counterAB]);
        animBC(tabLinkAcc[counterAB - 1]);
        animCD(tabLinkAcc[counterAB - 2])
    }
}

// export function Decompte(tabLinkAcc,){
//     const counterAB = localStorage.getItem("counterAB")
//      console.log("counterDecompte" , counterAB)
     
//      if (counter === 16){
//          if (counterInit === 0 && counterAB==0) {
//              animAB(tabLinkAcc[counterAB]); //1er index du tabPartition
//              counterDepart--
//          }
//          else if (counterAB >= tabLinkAcc.length-1){     //FIN1
//              animBC(tabLinkAcc[counterAB - 1]);          //index de A=>B précédent
//              animCD(tabLinkAcc[counterAB - 2]);
//              counterAB++ 
//          }
//          else {
//              animAB(tabLinkAcc[counterAB]);    //nouvel index       
//              animBC(tabLinkAcc[counterAB - 1]);  //index de A=>B précédent
//              animCD(tabLinkAcc[counterAB - 2]); // index de B=>C précédent  
//              counterAB++
//          }
//      }
//      else if (counter === 12) {
//          if (counterInit === 0) {
//              animAB(tabLinkAcc[counterAB]);     // 2eme index du tabPartition
//              animBC(tabLinkAcc[counterAB - 1]);   // 1eme index du tabPartiton
//              counterAB++
//              counterDepart--
//          }
//          else if (counterAB >= tabLinkAcc.length){// Fin 1
//                  //index de A=>B précédent
//                  animCD(tabLinkAcc[counterAB - 2]);
//                  pause()
//              }
//          else if (counterAB >= tabLinkAcc.length-1){ // FIN 2
//                  animBC(tabLinkAcc[counterAB - 1]);          //index de A=>B précédent
//                  animCD(tabLinkAcc[counterAB - 2]);
//                  counterAB++ 
//              }
//          else {
//              animAB(tabLinkAcc[counterAB]);            //nouvel index
//              animBC(tabLinkAcc[counterAB - 1]);          //index de A=>B précédent
//              animCD(tabLinkAcc[counterAB - 2]);          // index de B=>C précédent
//              counterAB++
//          }
//      }
//      else if (counter === 8) {
//          if (counterAB >= tabLinkAcc.length-1) {  //FIN 3
//              animBC(tabLinkAcc[counterAB - 1]);          //index de A=>B précédent
//              animCD(tabLinkAcc[counterAB - 2]);           //index de B=>C précédent
//              counterAB++
//          }
//          else if (counterAB >= tabLinkAcc.length){   // FIN 2
//              animCD(tabLinkAcc[counterAB - 2]);
//              pause()
//          }
//          else {
//              animAB(tabLinkAcc[counterAB]);
//              animBC(tabLinkAcc[counterAB - 1]);
//              animCD(tabLinkAcc[counterAB - 2]);
//              counterAB++
//          }
//      }
//      else if (counter === 4) {
//          if (counterAB >= tabLinkAcc.length) {             //FIN 3
//              animCD(tabLinkAcc[counterAB - 2]);
//              pause()
//          }
//          else {
//              animAB(tabLinkAcc[counterAB]);
//              animBC(tabLinkAcc[counterAB - 1]);
//              animCD(tabLinkAcc[counterAB - 2]);
//              counterAB++
//          }
//      }
//      else if (counter === 1) {
//          if (counterAB < tabLinkAcc.length+2) {
//              counter = 17;
//              counterInit++;
//          }
//          else {
//              pause()
//          }
//      }
//      return (
//          <></>
//      )
//  }