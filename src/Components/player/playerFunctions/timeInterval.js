// import React, { useEffect, useRef } from 'react';

// function timeInterval(callback, delay) {
//   const savedCallback = useRef();

//   // Se souvenir de la dernière fonction de rappel.
//   useEffect(() => {
//     savedCallback.current = callback;
//   });

//   // Configurer l’intervalle.
//   useEffect(() => {
//     function tick() {
//       savedCallback.current();
//     }
//     if (delay !== null) {
//       let id = setInterval(tick, delay);
//       return () => clearInterval(id);
//     }
//   }, [delay]);
// }
// export default timeInterval