import axios from "axios";
import { USERINVESTMENT_BASE_URL } from "../constants/api";

export const addBalanceUserInvestment = async (token: string, id: number, value: number) => {
    try {
        return await axios.put(`${USERINVESTMENT_BASE_URL}/AddBalance/${id}/${value}`, null, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error: any) {
        return error.response.data;
    }
}