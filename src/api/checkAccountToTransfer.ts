import axios from "axios";

import { TRANSACTION_BASE_URL } from "../constants/api"

export const checkAccountToTransfer = async (token: string, data: TransferData) => {
    try {
        return await axios.post(`${TRANSACTION_BASE_URL}/checkAccountToTransfer`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error: any) {
        return error.response.data;
    }
}