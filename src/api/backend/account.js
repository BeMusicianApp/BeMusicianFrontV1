import { URL_BACK_LOGIN } from "../../constants/urls/urlBackEnd";
import apiBackEnd from './api.Backend';

export function authenticate(values) {
    return apiBackEnd.post(URL_BACK_LOGIN, values);
}