import axios from "axios";

import { AUTH_BASE_URL } from "../constants/api"

export const checkToken = (token: string) => {
    try {
        return axios.get(`${AUTH_BASE_URL}/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error: any) {
        return error.response.data;
    }
}