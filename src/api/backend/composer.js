import {URL_BACK_CREATE_COMPOSER} from "../../constants/urls/urlBackEnd";
import apiBackEnd from './api.Backend';

export function createCompo(tab, musique) {
    console.log("axios",tab, musique)
    return apiBackEnd.post(URL_BACK_CREATE_COMPOSER, {tab, musique});
}