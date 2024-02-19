import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { format } from '../../actions/actions';

interface Props {
    investment: Investment;
    value: number
}

export function InvestmentInfos({ investment, value }: Props) {
    const { name, annualPercentage, minMonths, minValue } = investment;
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome do investimento</Text>
            <Text style={styles.text}>{name}</Text>

            <Text style={styles.label}>Porcentagem de ganho anual</Text>
            <Text style={styles.text}>{annualPercentage}%</Text>

            <Text style={styles.label}>Saque disponível em</Text>
            <Text style={styles.text}>{minMonths} meses</Text>

            <Text style={styles.label}>Valor mínimo do primeiro depósito</Text>
            <Text style={[styles.text, (!!value && value < minValue) && styles.unavailable]}>{format(minValue)}</Text>
        </View>
    );
}