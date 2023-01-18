import { useState } from "react";
import { useEffect } from "react";
import { pause } from "../pause";
const Range = ({Bpm, setBpm, tempoSelect}) => {
    console.log("props",Bpm)
    const [LocalBpm, setLocalBpm] = useState(Bpm)
    
    const tempoSelectLocal = (e) =>{
        const selectedBpm = e.target.value;
        console.log(selectedBpm)
        setLocalBpm(selectedBpm)
        tempoSelect(e)
    }


    
    return (
        <div className="flex flex-col item-center">
        <label>Bpm : {LocalBpm} </label>
        <input id="selectTempo" className="ml-8 w-20" onChange={tempoSelectLocal} defaultValue={Bpm} min="40" max="200" step="0.5" type="range"></input>
    </div>
    )
}
export default Range