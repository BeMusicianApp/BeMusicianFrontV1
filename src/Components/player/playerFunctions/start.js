import { decompteAnim } from "./decompte";
import { useDispatch, useSelector } from 'react-redux';

function useCounterValue() {
    return useSelector(state => state.counterTab.counterAB);
  }

export const startPlay = (tabLinkAcc, counter, counterInit,counterDepart,intervalId) => {
  //const dispatch = useDispatch();
  //const counterAB = useCounterValue()

  setInterval(function() {
    //dispatch({ type: 'INCREMENT_COUNTER' });
    //decompteAnim(tabLinkAcc, counterAB ,counter, counterInit,counterDepart);
  }, 1000); // mettre à jour toutes les secondes (1000 millisecondes)
}