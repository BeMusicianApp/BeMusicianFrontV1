
export const pause = (intervalId, startPlay) => {
    clearInterval(intervalId);
    startPlay=false
    intervalId = null;
    sessionStorage.setItem("intervalId", intervalId)
};