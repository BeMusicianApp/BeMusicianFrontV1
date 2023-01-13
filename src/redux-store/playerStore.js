import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
const initialState = {
    //la carte à afficher
    counterTab : 0,

    //Initialisé ou pas
    Initial: true,

    //nombre de temps
    Temps : 17,

    //play
    play : false,

    // pause
    pause : false,

}

// une action Redux est un objet
const playAction = ()=>({
    // la propriété type permet d'itentifier l'action
    type : "play"
})

const lectureAction = ()=> ({ type:'lecture'})

function reducer(state,action){
    if(action.type === "play"){
        //il faut inverser la propriété
        return {
            //les 3 petits point ajoute un state sans modifier les précédent
            ...state,
            playing: !state.playing
        }
    }
    //sinon on retourne le state sans le changer
    return state
}

// on crée le store avec le state et le reducer
const store = configureStore(reducer, initialState)

store.Dispatch()