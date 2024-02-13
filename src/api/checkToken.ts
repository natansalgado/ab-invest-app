import axios from "axios";

import { PROFILE_BASE_URL } from "../constants/api"

export const checkToken = (token: string) => {
    try {
        return axios.get(PROFILE_BASE_URL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error: any) {
        return error.response.data;
    }
}