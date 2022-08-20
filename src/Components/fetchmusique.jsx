import { useEffect, useState } from "react";

export function Fetchmusique() {

const [title, setTitle] = useState();


    const fetchData = async () => {
        let musique = await(await fetch('http://localhost:5006/musique')).json();
        return { musique }
    }
    fetchData().then(load => {
       let titlefetch = load.musique;
       let tabTitle = [];

        for (let i = 0; i < titlefetch.length; i++) {
            tabTitle.push(load.musique[i].name)
        }
        setTitle({
            tabTitle,
        })
    })

}