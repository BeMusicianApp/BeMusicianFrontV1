import {createSlice, configureStore} from "@reduxjs/toolkit";
import { animAB } from "../AnimFunction/animAsc";
import { useDispatch } from "react-redux";

const initialState = {
  intervalId: null,
  counterAB : 0,
};
//const dispatch = useDispatch()

const counterSlice = createSlice({
  name: 'counterTab',
  initialState,
  reducers : {
    increment:(state, action)=>{
      // action {type : "counter/increment" , payload}
      state.counterAB++
    },
    decrement:(state, action)=>{
      state.counterAB--
    },
    reset:(state,action)=>{
      state.counterAB=0
    },
    startInterval: (state, action) => {
      // démarrez l'intervalle et stockez l'ID de l'intervalle dans l'état
      const intervalId = setInterval(() => {
        // dispatch l'action de mise à jour de l'état ici
        action.payload.updateState(state.counterAB);
      }, 1000);
      state.intervalId = intervalId;
    },
    stopInterval: state => {
      // arrêtez l'intervalle en utilisant l'ID stocké dans l'état
      clearInterval(state.intervalId);
      state.intervalId = null;
    },
    updateState: (state, action) => {
      state.counterAB = action.payload;
    }
  },
})

// const slice = createSlice({
//   name: 'interval',
//   initialState,
//   reducers: {
//     startInterval: (state, action) => {
//       // démarrez l'intervalle et stockez l'ID de l'intervalle dans l'état
//       const intervalId = setInterval(() => {
//         // dispatch l'action de mise à jour de l'état ici
//         action.payload.updateState(state.counterAB);
//       }, 1000);
//       state.intervalId = intervalId;
//     },
//     stopInterval: state => {
//       // arrêtez l'intervalle en utilisant l'ID stocké dans l'état
//       clearInterval(state.intervalId);
//       state.intervalId = null;
//     },
//     updateState: (state, action) => {
//       state.counterAB++;
//     }
//   }
// });

export const { startInterval, stopInterval, updateState } = counterSlice.actions;
export const store = configureStore({
  reducer:{
    counterTab : counterSlice.reducer,
    // interval : slice.reducer,
  }
})
