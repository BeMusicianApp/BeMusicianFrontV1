import { useState } from "react";
import { useEffect } from "react";
import { pause } from "../pause";
const Range = ({Bpm, setBpm, tempoSelect}) => {
    const [LocalBpm, setLocalBpm] = useState(Bpm)
    
    const tempoSelectLocal = (e) =>{
        const selectedBpm = e.target.value;
        setLocalBpm(selectedBpm)
        tempoSelect(e)
    }
    
    return (
    <div className="flex flex-col item-center w-60">
        <label className="text-black text-center font-bold w-60">BpmOff : {Bpm} BpmPlay : {LocalBpm}</label>
        <input id="selectTempo" className="" onChange={tempoSelectLocal} defaultValue={Bpm} min="40" max="200" step="0.5" type="range"></input>
    </div>
    )
}
export default Range