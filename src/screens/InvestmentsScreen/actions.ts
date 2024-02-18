import { Dispatch, SetStateAction } from "react";
import { checkToken } from "../../api/checkToken";
import { getInvestments } from "../../api/getInvestments";


export const loadInfos = async (
    setInvestments: Dispatch<SetStateAction<Investment[]>>,
    setError: Dispatch<SetStateAction<string>>
) => {
    const serverErrorMessage = 'Erro ao tentar acessar o servidor';
    try {
        const response = await getInvestments();

        if (response.status !== 200) return setError(serverErrorMessage);

        setInvestments(response.data.$values);
    } catch (error: any) {
        setError(serverErrorMessage);
    }
}
