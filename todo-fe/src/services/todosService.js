import axios from 'axios';
import { API_TODOS_ENDPOINT } from '../constants/constants';

export function saveTodosList(email, id, headline, tasks) {
    return axios.post(API_TODOS_ENDPOINT + '/save', {
        email: email,
        todo: {
            id: id,
            headline: headline,
            tasks: tasks
        }
    });
}