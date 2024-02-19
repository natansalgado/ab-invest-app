import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import * as actions from './actions';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Button } from '../../components/Button';
import { InvestmentCard } from '../../components/InvestmentCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Investments'>

export function InvestmentsScreen({ navigation, route }: Props) {
    const { userToken, setUserToken } = route.params;
    const [investments, setInvestments] = useState<Investment[]>([]);
    const [error, setError] = useState('');

    const goBack = () => {
        navigation.goBack();
    }

    const goToInvestmentScreen = (investment: Investment) => {
        navigation.navigate('Investment', { investment, userToken, setUserToken})
    }

    useEffect(() => {
        actions.loadInfos(setInvestments, setError);
    }, [])

    return (
        <View style={styles.container}>
            {error ?
                <ErrorMessage message={error} />
                :
                investments.length > 0 ?
                    <ScrollView>{
                        investments.map((investiment, i) => (
                            <InvestmentCard investment={investiment} key={i} onPress={() => goToInvestmentScreen(investiment)} />
                        ))}
                    </ScrollView>
                    :
                    <View>
                        <ErrorMessage message='No momento não há nenhum investimento disponível. Tente novamente mais tarde' />
                        <Button text='Voltar' onPress={goBack} />
                    </View>
            }
        </View>
    );
}