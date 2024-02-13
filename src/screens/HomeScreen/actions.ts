import { Dispatch, SetStateAction } from "react";
import { checkToken } from "../../api/checkToken";
import { getAccountData as getAccount } from "../../api/getAccountData";

export const loadInfos = async (token: string, setToken: Dispatch<SetStateAction<string>>, setUserData: Dispatch<SetStateAction<UserData>>, setAccountData: Dispatch<SetStateAction<AccountData>>) => {
    try {
        const response = await checkToken(token);

        if (response.status !== 200) return setToken("");

        setUserData(response.data);
        const userId = response.data.id;

        try {
            const response = await getAccount(userId, token);
            setAccountData(response.data);
        } catch (error) {
            console.error(error);
        }
    } catch (error) {
        setToken("");
    }


}