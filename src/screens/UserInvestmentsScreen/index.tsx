import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { styles } from './styles';
import * as actions from './actions';
import { Button } from '../../components/Button';
import { UserInvestmentsContainer } from '../../components/UserInvestmentsContainer';
import { ErrorMessage } from '../../components/ErrorMessage';
import { TotalUserInvestments } from '../../components/TotalUserInvestments';

type Props = NativeStackScreenProps<RootStackParamList, 'UserInvestments'>

export function UserInvestmentsScreen({ navigation, route }: Props) {
    const { userToken, setUserToken } = route.params;
    const [userInvestments, setUserInvestments] = useState<UserInvestment[]>([]);
    const [error, setError] = useState('');

    const goBack = () => {
        navigation.goBack();
    }

    const goToInvestmentsScreen = () => {
        navigation.navigate('Investments');
    }

    useEffect(() => {
        actions.loadInfos(userToken, setUserToken, setUserInvestments, setError)
    }, []);

    return (
        <>
            {error ?
                <>
                    <ErrorMessage message={error} />
                    <Button text='Voltar' onPress={goBack} />
                </>
                :
                userInvestments.length > 0 ?
                    <>
                        <TotalUserInvestments userInvestments={userInvestments} />
                        <UserInvestmentsContainer userInvestments={userInvestments} />
                        <View style={styles.container}>
                            <Text style={styles.label}>Fazer novo investimento</Text>
                            <Button text='Ver investimentos disponíveis' onPress={goToInvestmentsScreen} />
                        </View>
                    </>
                    :
                    <View style={styles.container}>
                        <ErrorMessage message='Você não possui nenhum investimento no momento' />
                        <Button text='Ver investimentos disponíveis' onPress={goToInvestmentsScreen} />
                    </View>
            }
        </>
    );
}