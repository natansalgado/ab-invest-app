import { Dispatch, SetStateAction } from "react";
import { addBalanceUserInvestment } from "../../api/AddBalanceUserInvestment";
import { RootStackParamList } from "../../types/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const confirmAddBalance = async (
    token: string,
    setToken: Dispatch<SetStateAction<string>>,
    id: number,
    setError: Dispatch<SetStateAction<string>>,
    value: number,
    navigation: NativeStackNavigationProp<RootStackParamList, 'AddBalanceUserInvestment', undefined>,
    setModalOpen: Dispatch<SetStateAction<boolean>>
) => {
    const serverErrorMessage = 'Erro ao tentar acessar o servidor';

    setModalOpen(true);

    try {
        const response = await addBalanceUserInvestment(token, id, value);

        if (response.status !== 200) {
            navigation.navigate('AddBalanceUserInvestmentDone', { userToken: token, setUserToken: setToken, error: response });
        }

        navigation.navigate('AddBalanceUserInvestmentDone', { userToken: token, setUserToken: setToken });
    } catch (error: any) {
        navigation.navigate('AddBalanceUserInvestmentDone', { userToken: token, setUserToken: setToken, error: serverErrorMessage });
        setError(serverErrorMessage)
    }
}