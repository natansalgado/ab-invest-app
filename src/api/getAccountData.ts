import axios from "axios"
import { ACCOUNT_BASE_URL } from "../constants/api"

export const getAccountData = async (userId: number, token: string) => {
    try {
        return await axios.get(`${ACCOUNT_BASE_URL}/userid/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error: any) {
        return error.response.data;
    }
}