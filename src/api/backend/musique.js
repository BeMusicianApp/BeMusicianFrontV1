import {URL_BACK_MUSIQUE,URL_BACK_COMPOSER, URL_BACK_CREATE_MUSIQUE} from "../../constants/urls/urlBackEnd";
import apiBackEnd from './api.Backend';

export function getAllMusique() {
    return apiBackEnd.get(URL_BACK_MUSIQUE);
}

export function getMusiqueToPlay(id) {
    console.log(id)
    return apiBackEnd.get(URL_BACK_COMPOSER + id)
}

export function createMusique(value){
    return apiBackEnd.post(URL_BACK_CREATE_MUSIQUE, value)
}