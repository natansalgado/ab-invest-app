import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Button } from '../../components/Button';
import { format as formatMoney } from '../../actions/actions';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { format as formatDate } from 'date-fns';
import { ErrorMessage } from '../../components/ErrorMessage';

type Props = NativeStackScreenProps<RootStackParamList, 'DepositDone'>;

export function DepositDoneScreen({ navigation, route }: Props) {
    const { deposit, error } = route.params;

    const goBack = () => {
        navigation.goBack();
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            {!error && deposit ?
                <>
                    <Text style={styles.header}>Deposito concluído com sucesso!</Text>

                    <Text style={styles.label}>Valor</Text>
                    <Text style={styles.value}>{formatMoney(deposit.value)}</Text>

                    <Text style={styles.label}>Método de pagamento</Text>
                    <Text style={styles.value}>{deposit.paymentMethod}</Text>

                    <Text style={styles.label}>Data</Text>
                    <Text style={styles.value}>{formatDate(deposit.date, 'dd/MM/yyyy')}</Text>

                    <Button text='Sair' onPress={goBack} />
                </>
                :
                <>
                    <ErrorMessage message={error || ''} />
                </>
            }
        </View>
    );
}