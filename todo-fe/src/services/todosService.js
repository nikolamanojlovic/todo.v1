import axios from 'axios';
import { API_TODOS_ENDPOINT } from '../constants/constants';

export function createTodosList(email, headline) {
    return axios.post(API_TODOS_ENDPOINT + '/crate', {
        email: email,
        headline: headline
    });
}