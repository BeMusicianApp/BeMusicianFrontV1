import {URL_BACK_ACCORD} from "../../constants/urls/urlBackEnd";
import apiBackEnd from './api.Backend';

export function getAllAccord() {
    return apiBackEnd.get(URL_BACK_ACCORD);
}

// export function getMusiqueToPlay(id) {
//     console.log(id)
//     return apiBackEnd.get(URL_BACK_COMPOSER + id)
// }