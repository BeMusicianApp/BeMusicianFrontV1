import {useState,useEffect} from 'react'
import {Accord} from '../Models/accord.model'

export function FetchAccord(){
    const [accords, setAccords] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            let data = Accord.from(await (await fetch('http://localhost:5001/accord')).json());
            setAccords(data);
            console.log("fetch")
        }
        fetchData()
    }, [accords]);   
    return (accords)  
}