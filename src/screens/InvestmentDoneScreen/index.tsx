import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Button } from '../../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'InvestmentDone'>

export function InvestmentDoneScreen({ navigation, route }: Props) {
    const { error, userToken, setUserToken } = route.params;

    const goBack = () => {
        navigation.navigate('UserInvestments', { userToken, setUserToken });
    }

    return (
        <View style={styles.container}>
            {!error ?
                <>
                    <Text style={styles.title}>Investimento concluído com sucesso!</Text>
                    <Button text='Ver meus investimentos' onPress={goBack} />
                </>
                :
                <>
                    <ErrorMessage message={error} />
                    <Button text='Voltar' onPress={goBack} />
                </>
            }
        </View>
    );
}