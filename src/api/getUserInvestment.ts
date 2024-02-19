import axios from "axios";
import { USERINVESTMENT_BASE_URL } from "../constants/api";

export const getUserInvestment = async (token: string, id: number) => {
    try {
        return await axios.get(`${USERINVESTMENT_BASE_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error: any) {
        return error.response.data;
    }
}