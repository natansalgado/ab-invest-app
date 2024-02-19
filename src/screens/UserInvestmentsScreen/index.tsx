import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { styles } from './styles';
import { loadInfos } from './actions';
import { Button } from '../../components/Button';
import { UserInvestmentsContainer } from '../../components/UserInvestmentsContainer';
import { ErrorMessage } from '../../components/ErrorMessage';
import { TotalUserInvestments } from '../../components/TotalUserInvestments';

type Props = NativeStackScreenProps<RootStackParamList, 'UserInvestments'>

export function UserInvestmentsScreen({ navigation, route }: Props) {
    const { userToken, setUserToken } = route.params;
    const [userInvestments, setUserInvestments] = useState<UserInvestment[]>([]);
    const [error, setError] = useState('');
    const [refreshing, setRefreshing] = useState(false)

    const goBack = () => {
        navigation.goBack();
    }

    const goToInvestmentsScreen = () => {
        navigation.navigate('Investments', { userToken, setUserToken });
    }
    const goToUserInvestmentScreen = (id: number) => {
        navigation.navigate('UserInvestment', { userToken, setUserToken, id });
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
            loadInfos(userToken, setUserToken, setUserInvestments, setError)
        }, 1000);
    }, []);

    useEffect(() => {
        loadInfos(userToken, setUserToken, setUserInvestments, setError)
    }, []);

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
            {error ?
                <>
                    <ErrorMessage message={error} />
                    <Button text='Voltar' onPress={goBack} />
                </>
                :
                userInvestments.length > 0 ?
                    <>
                        <TotalUserInvestments userInvestments={userInvestments} />

                        <UserInvestmentsContainer userInvestments={userInvestments} onPress={goToUserInvestmentScreen} />

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
        </ScrollView>
    );
}