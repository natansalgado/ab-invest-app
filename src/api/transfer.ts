import axios from "axios";

import { TRANSACTION_BASE_URL } from "../constants/api"

export const transfer = async (token: string, data: TransferData) => {
    try {
        return await axios.post(`${TRANSACTION_BASE_URL}/transfer`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error: any) {
        return error.response.data;
    }
}