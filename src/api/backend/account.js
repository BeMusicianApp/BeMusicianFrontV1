import { URL_BACK_LOGIN, URL_BACK_REGISTER } from "../../constants/urls/urlBackEnd";
import apiBackEnd from './api.Backend';

export function authenticate(values) {
    return apiBackEnd.post(URL_BACK_LOGIN, values);
}

export function register(values) {
    return apiBackEnd.post(URL_BACK_REGISTER, values);
}