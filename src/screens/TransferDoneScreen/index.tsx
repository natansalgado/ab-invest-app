import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Button } from '../../components/Button';
import { format as formatMoney } from '../../actions/actions';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { format as formatDate } from 'date-fns';

type Props = NativeStackScreenProps<RootStackParamList, 'TransferDone'>;

export function TransferDoneScreen({ navigation, route }: Props) {
    const { receiverKey, receiverName, value, date } = route.params;

    const goBack = () => {
        navigation.goBack();
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Transferência concluída!</Text>

            <Text style={styles.label}>Chave da conta</Text>
            <Text style={styles.value}>{receiverKey}</Text>

            <Text style={styles.label}>Nome do destinatário</Text>
            <Text style={styles.value}>{receiverName}</Text>

            <Text style={styles.label}>Valor</Text>
            <Text style={styles.value}>{formatMoney(value)}</Text>

            <Text style={styles.label}>Data da transferência</Text>
            <Text style={styles.value}>{formatDate(date, 'dd/MM/yyyy')}</Text>

            <Button text='Sair' onPress={goBack} />
        </View>
    );
}