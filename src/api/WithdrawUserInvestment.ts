import axios from "axios";
import { USERINVESTMENT_BASE_URL } from "../constants/api";

export const withdrawUserInvestment = async (token: string, id: number, value: number) => {
    try {
        return await axios.delete(`${USERINVESTMENT_BASE_URL}/Withdraw/${id}/${value}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error: any) {
        return error.response.data;
    }
}