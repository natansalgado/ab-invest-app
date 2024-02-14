import axios from "axios";

import { TRANSFER_BASE_URL } from "../constants/api"

export const checkAccountToTransfer = async (token: string, data: TransferData) => {
    try {
        return await axios.post(`${TRANSFER_BASE_URL}/CheckAccountToTransfer`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error: any) {
        return error.response.data;
    }
}