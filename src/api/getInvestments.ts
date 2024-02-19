import axios from "axios"
import { INVESTMENT_BASE_URL } from "../constants/api"

export const getInvestments = async () => {
    try {
        return await axios.get(INVESTMENT_BASE_URL);
    } catch (error: any) {
        return error.response.data;
    }
}