import axios from "axios";
import { SignIn } from "../screens/SignInScreen/types";
import { AUTH_BASE_URL } from "../constants/api";

export const fetchSignIn = async (data: SignIn) => {
    try {
        return await axios.post(AUTH_BASE_URL, data);
    } catch (error: any) {
        return error.response.data;
    }
}