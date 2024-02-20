import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import * as actions from './actions';
import { InvestmentInfos } from '../../components/InvestmentInfos';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Button } from '../../components/Button';
import { UserInvestmentInfos } from '../../components/UserInvestmentInfos';

type Props = NativeStackScreenProps<RootStackParamList, 'UserInvestment'>;

export function UserInvestmentScreen({ navigation, route }: Props) {
    const { userToken, setUserToken, id } = route.params;
    const [userInvestment, setUserInvestment] = useState<UserInvestment | null>(null);
    const [error, setError] = useState<string>('');
    const [refreshing, setRefreshing] = useState(false);

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            actions.loadInfos(userToken, setUserToken, id, setUserInvestment, setError);
            setRefreshing(false);
        }, 1000)
    }

    const goAddScreen = () => {
        navigation.navigate('AddBalanceUserInvestment', { userToken, setUserToken, id, userInvestment })
    }

    const goWithdrawScreen = () => {
        navigation.navigate('Withdraw', { userInvestment, userToken, setUserToken })
    }

    const goBack = () => {
        navigation.goBack();
    }

    useEffect(() => {
        actions.loadInfos(userToken, setUserToken, id, setUserInvestment, setError);
    }, []);

    return (
        <ScrollView showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        >
            <View style={styles.container}>
                {!error && userInvestment ?
                    <>
                        <UserInvestmentInfos userInvestment={userInvestment} />

                        <Text style={styles.title}>Detalhes do Investimento escolhido</Text>

                        <InvestmentInfos investment={userInvestment?.investment} value={0} />

                        <Button text='Adicionar' onPress={goAddScreen} />
                        <Button text='Sacar' cancel onPress={goWithdrawScreen} disabled={new Date() < new Date(userInvestment.endDate)} />
                    </>
                    :
                    <>
                        <ErrorMessage message={error} />
                        <Button text='Voltar' onPress={goBack} />
                    </>
                }
            </View>
        </ScrollView>
    );
}