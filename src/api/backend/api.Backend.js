import axios from 'axios';
import handleHttpError from '../../lib/HandleHttpError';
import { getToken } from '../../services/tokenServices';

// changer le baseURL par le env

const apiBackEnd = axios.create({
    baseURL: 'https://quiet-lake-51587.herokuapp.com',
});
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