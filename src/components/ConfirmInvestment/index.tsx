import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { InvestmentInfos } from '../InvestmentInfos';
import { format } from '../../actions/actions';
import { Button } from '../Button';

interface Props {
    investment: Investment;
    value: number;
    name: string;
    confirm: () => void;
    cancel: () => void;
}

export function ConfirmInvestment({ investment, value, name, confirm, cancel }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Deseja realmente fazer esse investimento?</Text>

            <InvestmentInfos investment={investment} value={value} />

            <Text style={styles.label}>Nome utilizado</Text>
            <Text style={styles.value}>{name}</Text>

            <Text style={styles.label}>Valor do primeiro depósito</Text>
            <Text style={styles.value}>{format(value)}</Text>

            <View style={styles.buttons}>
                <Button text='Confirmar' onPress={confirm} />
                <Button text='Cancelar' onPress={cancel} cancel />
            </View>
        </View>
    );
}