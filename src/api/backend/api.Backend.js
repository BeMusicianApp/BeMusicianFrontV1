import axios from 'axios';
import handleHttpError from '../../lib/HandleHttpError';
import { getToken } from '../../services/tokenServices';

// changer le baseURL par le env
let apiBackEnd
if(process.env.NODE_ENV==="production"){
    apiBackEnd = axios.create({
        baseURL: 'https://quiet-lake-51587.herokuapp.com',
    });
}else{
    apiBackEnd = axios.create({
        baseURL: 'http://localhost:5006',
    });
}

export default apiBackEnd;

apiBackEnd.interceptors.request.use((request) => {
    request.headers['Authorization'] = `Bearer ${getToken()}`;
    return request;
});

/**
 * Interceptor of response, to see status code in the console and to handle the error
 *
 * @author Peter Mollet
 */
apiBackEnd.interceptors.response.use(
    (response) => {
        console.log(response.status);
        return response;
    },
    (error) => {
        handleHttpError(error);
        return error;
    },
);