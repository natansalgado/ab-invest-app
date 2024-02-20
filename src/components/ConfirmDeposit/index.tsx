import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { format } from '../../actions/actions';
import { Button } from '../Button';
import { FakeHeader } from '../FakeHeader';

interface Props {
    value: number;
    select: string;
    balance: number;
    confirm: () => void;
    cancel: () => void;
}

export function ConfirmDeposit({ value, select, balance, confirm, cancel }: Props) {
    return (
        <>
            <FakeHeader />
            <View style={styles.container}>
                <Text style={styles.title}>Deseja realmente fazer o depósito?</Text>

                <Text style={styles.label}>Valor</Text>
                <Text style={styles.value}>{format(value)}</Text>

                <Text style={styles.label}>Método de pagamento</Text>
                <Text style={styles.value}>{select}</Text>

                <Text style={styles.label}>Saldo após o depósito</Text>
                <Text style={styles.value}>{format(balance + value)}</Text>

                <View style={styles.buttons}>
                    <Button text='Confirmar' onPress={confirm} />
                    <Button text='Cancelar' onPress={cancel} cancel />
                </View>
            </View>
        </>
    );
}