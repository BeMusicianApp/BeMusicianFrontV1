
export const pause = (intervalId) => {
    clearInterval(intervalId);
    intervalId = null;
    sessionStorage.setItem("intervalId", intervalId)
};