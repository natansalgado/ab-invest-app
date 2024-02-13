import axios from "axios";
import { SignUp } from "../screens/SignUpScreen/types";
import { USER_BASE_URL } from "../constants/api";

export const fetchSignUp = async (data: SignUp) => {
    try {
        return await axios.post(USER_BASE_URL, data);
    } catch (error: any) {
        return error.response.data;
    }
}