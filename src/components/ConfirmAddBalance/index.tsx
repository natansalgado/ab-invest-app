import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { format } from '../../actions/actions';
import { Button } from '../Button';
import { FakeHeader } from '../FakeHeader';

interface Props {
    userInvestment: UserInvestment | null;
    value: number;
    confirm: () => void;
    cancel: () => void;
}

export function ConfirmAddBalance({ userInvestment, value, confirm, cancel }: Props) {
    if (!userInvestment) return;

    const { name, balance } = userInvestment;

    return (
        <>
            <FakeHeader />
            <View style={styles.container}>
                <Text style={styles.title}>Deseja realmente adicionar saldo ao investimento?</Text>

                <Text style={styles.label}>Nome</Text>
                <Text style={styles.value}>{name}</Text>

                <Text style={styles.label}>Valor a ser adicionado</Text>
                <Text style={styles.value}>{format(value)}</Text>

                <Text style={styles.label}>Saldo do investimento após o depósito</Text>
                <Text style={styles.value}>{format(balance + value)}</Text>

                <View style={styles.buttons}>
                    <Button text='Confirmar' onPress={confirm} />
                    <Button text='Cancelar' onPress={cancel} cancel />
                </View>
            </View>
        </>
    );
}