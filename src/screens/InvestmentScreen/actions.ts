import { Dispatch, SetStateAction } from "react";
import { createUserInvestment } from "../../api/createUserInvestment";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/types";


export const confirmInvestment = async (
    userToken: string,
    setUserToken: Dispatch<SetStateAction<string>>,
    data: CreateUserInvestment,
    navigation: NativeStackNavigationProp<RootStackParamList, 'Investment', undefined>
) => {
    try {
        const response = await createUserInvestment(userToken, data);

        if (response.status !== 200) return navigation.navigate('InvestmentDone', { error: response, userToken, setUserToken });

        navigation.navigate('InvestmentDone', { userToken, setUserToken });
    } catch (error: any) {
        return navigation.navigate('InvestmentDone', { error: 'Erro ao tentar acessar o servidor', userToken, setUserToken });
    }
}

export const getExample = () => {
    const examples = [
        'Casa nova',
        'Carro novo',
        'Faculdade',
        'Cozinha nova',
        'Viagem dos sonhos'
    ];

    const random = Math.floor(Math.random() * examples.length);

    return examples[random];
}