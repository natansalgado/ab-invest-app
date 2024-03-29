import axios from "axios";
import { USERINVESTMENT_BASE_URL } from "../constants/api";

export const getUserInvestments = async (token: string, accountId: number) => {
    try {
        return await axios.get(`${USERINVESTMENT_BASE_URL}/account/${accountId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error: any) {
        return error.response.data;
    }
}