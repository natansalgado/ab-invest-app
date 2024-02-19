import { Dispatch, SetStateAction } from "react";
import { checkAccountToTransfer } from "../../api/checkAccountToTransfer"
import { transfer } from "../../api/transfer";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/types";

type SetError = Dispatch<SetStateAction<string>>;

export const checkAccount = async (token: string, data: TransferData, setReceiverData: Dispatch<SetStateAction<ReceiverData | null>>, setError: SetError) => {
    try {
        const response = await checkAccountToTransfer(token, data);
        if (response.status !== 200) return setError(response);

        setError('');
        setReceiverData(response.data);
    } catch (error: any) {
        setError("Erro ao tentar acessar o servidor");
    }
}

export const confirmTransfer = async (token: string, data: TransferData, setError: SetError, navigation: NativeStackNavigationProp<RootStackParamList, "Transfer", undefined>) => {
    try {
        const response = await transfer(token, data);
        if (response.status !== 200) return setError(response);

        navigation.navigate('TransferDone', response.data);
    } catch (error: any) {
        setError("Erro ao tentar acessar o servidor");
    }
}