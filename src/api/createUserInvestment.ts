import axios from "axios"
import { USERINVESTMENT_BASE_URL } from "../constants/api"

export const createUserInvestment = async (token: string, data: CreateUserInvestment) => {
    try {
        return await axios.post(`${USERINVESTMENT_BASE_URL}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    } catch (error: any) {
        return error.response.data;
    }
}