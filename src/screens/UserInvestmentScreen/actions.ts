import { Dispatch, SetStateAction } from "react";
import { checkToken } from "../../api/checkToken";
import { getUserInvestment } from "../../api/getUserInvestment";

export const loadInfos = async (
    token: string,
    setToken: Dispatch<SetStateAction<string>>,
    id: number,
    setUserInvestment: Dispatch<SetStateAction<UserInvestment | null>>,
    setError: Dispatch<SetStateAction<string>>
) => {
    const serverErrorMessage = 'Erro ao tentar acessar o servidor';
    try {
        const response = await checkToken(token);

        if (response.status !== 200) return setToken("");

        try {
            const response = await getUserInvestment(token, id);

            if (response.status !== 200) return setError(response);

            setUserInvestment(response.data);
        } catch (error: any) {
            setError(serverErrorMessage);
        }
    } catch (error: any) {
        setError(serverErrorMessage)
    }
}
