import axios from "axios";

import { TRANSACTION_BASE_URL } from "../constants/api"

export const deposit = async (token: string, data: DepositData) => {
    try {
        return await axios.post(`${TRANSACTION_BASE_URL}/deposit`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error: any) {
        return error.response.data;
    }
}