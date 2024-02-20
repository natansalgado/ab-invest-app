import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/types";
import { withdrawUserInvestment } from "../../api/WithdrawUserInvestment";

export const confirmWithdraw = async (
    userToken: string,
    id: number,
    value: number,
    navigation: NativeStackNavigationProp<RootStackParamList, 'Withdraw', undefined>
) => {
    try {
        const response = await withdrawUserInvestment(userToken, id, value);

        if (response.status !== 200) return navigation.navigate('WithdrawDone', { error: response });

        navigation.navigate('WithdrawDone', { withdraw: response.data });
    } catch (error: any) {
        return navigation.navigate('WithdrawDone', { error: 'Erro ao tentar acessar o servidor' });
    }
}