import { Dispatch, SetStateAction } from "react";
import { checkToken } from "../../api/checkToken";
import { getAccountData } from "../../api/getAccountData";
import { getUserInvestments } from "../../api/getUserInvestments";

export const loadInfos = async (
    token: string,
    setToken: Dispatch<SetStateAction<string>>,
    setUserInvestments: Dispatch<SetStateAction<UserInvestment[]>>,
    setError: Dispatch<SetStateAction<string>>
) => {
    const serverErrorMessage = 'Erro ao tentar acessar o servidor';
    try {
        const response = await checkToken(token);

        if (response.status !== 200) return setToken("");

        const userId = response.data.id;

        try {
            const response = await getAccountData(userId, token);

            if (response.status !== 200) return setError(response);

            const accountId = response.data.id;

            try {
                const response = await getUserInvestments(token, accountId);

                if (response.status !== 200) return setError(response);

                setUserInvestments(response.data.$values);
            } catch (error: any) {
                setError(serverErrorMessage);
            }
        } catch (error: any) {
            setError(serverErrorMessage)
        }
    } catch (error: any) {
        setError(serverErrorMessage);
    }
}
