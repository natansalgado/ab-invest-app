import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { format } from '../../actions/actions';

interface Props {
    investment: Investment;
    onPress: (id: number) => void;
}

export function InvestmentCard({ investment, onPress }: Props) {
    const { id, name, annualPercentage, minMonths, minValue } = investment;

    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(id)}>
            <Text style={styles.name}>{name}</Text>

            <Text style={styles.label}>Porcentagem de ganho anual</Text>
            <Text style={styles.text}>{annualPercentage}%</Text>

            <Text style={styles.label}>Valor mínimo de depósito inicial</Text>
            <Text style={styles.text}>{format(minValue)}</Text>

            <Text style={styles.label}>Saque disponível em</Text>
            <Text style={styles.text}>{minMonths} meses</Text>
        </TouchableOpacity>
    );
}