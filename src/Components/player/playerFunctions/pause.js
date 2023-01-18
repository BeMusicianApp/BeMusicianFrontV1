
export const pause = (intervalId, startPlay) => {
    clearInterval(intervalId);
    console.log("startPlay",startPlay)
    startPlay=false
    intervalId = null;
    sessionStorage.setItem("intervalId", intervalId)
};