import { Dispatch, SetStateAction } from "react";
import { checkAccountToTransfer } from "../../api/checkAccountToTransfer"

export const checkAccount = async (token: string, data: TransferData, setReceiverData: Dispatch<SetStateAction<ReceiverData | null>>, setError: Dispatch<SetStateAction<string>>) => {
    try {
        const response = await checkAccountToTransfer(token, data);
        if (response.status !== 200) return setError(response);

        setReceiverData(response.data);
    } catch (error: any) {
        setError("Erro ao tentar acessar o servidor");
    }
}