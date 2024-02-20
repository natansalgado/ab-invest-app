import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Button } from '../../components/Button';
import { format, format as formatMoney } from '../../actions/actions';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { format as formatDate } from 'date-fns';
import { ErrorMessage } from '../../components/ErrorMessage';

type Props = NativeStackScreenProps<RootStackParamList, 'WithdrawDone'>;

export function WithDrawDoneScreen({ navigation, route }: Props) {
    const { error, withdraw } = route.params;

    const goBack = () => {
        navigation.goBack();
        navigation.goBack();
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            {!error && withdraw ?
                <>
                    <Text style={styles.header}>Saque concluído com sucesso!</Text>

                    <Text style={styles.label}>Valor sacado</Text>
                    <Text style={styles.value}>{format(withdraw.withdrewValue)}</Text>

                    <Text style={styles.label}>Data do saque</Text>
                    <Text style={styles.value}>{formatDate(withdraw.withdrawDate, 'dd/MM/yyyy - HH:mm')}</Text>

                    {withdraw.balance == withdraw.withdrewValue &&
                        <Text style={styles.label}>Investimento excluído por ter feito o saque total</Text>
                    }

                    <Button text='Sair' onPress={goBack} />
                </>
                :
                <>
                    <ErrorMessage message={error || ''} />
                    <Button text='Voltar' onPress={() => navigation.goBack()} />
                </>
            }
        </View>
    );
}