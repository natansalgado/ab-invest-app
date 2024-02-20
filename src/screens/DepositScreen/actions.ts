import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { deposit } from "../../api/deposit";
import { RootStackParamList } from "../../types/types";

export const confirmDeposit = async (token: string, data: DepositData, navigation: NativeStackNavigationProp<RootStackParamList, "Deposit", undefined>) => {
    try {
        const response = await deposit(token, data);
        if (response.status !== 200) return navigation.navigate('DepositDone', { error: response });

        navigation.navigate('DepositDone', { deposit: response.data });
    } catch (error: any) {
        return navigation.navigate('DepositDone', { error: 'Erro ao tentar acessar o servidor' });
    }
}