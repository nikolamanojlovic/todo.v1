import axios from 'axios';
import { API_AUTHENTICATION_ENDPOINT } from '../constants/constants';

export function logIn(email, password) {
    return axios.post(API_AUTHENTICATION_ENDPOINT + '/login', {
        email: email,
        password: password
    });
}

export function register(firstName, lastName, email, password) {
    return axios.post(API_AUTHENTICATION_ENDPOINT + '/register', {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });
}