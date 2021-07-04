import axios from "axios";
import {
    LOGIN_USER
} from './types';

export function loginUser(dataToSubmit) {

    // BackEnd에서 가져온 모든 데이터
    const request = axios.post('/api/users/login', dataToSubmit)
        .then(response => response.data)  

    return {
        type: LOGIN_USER,
        payload: request
    }

}