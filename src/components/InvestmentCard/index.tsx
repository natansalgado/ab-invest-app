import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { format } from '../../actions/actions';
import { Button } from '../Button';

interface Props {
    investment: Investment;
    onPress: (id: number) => void;
}

export function InvestmentCard({ investment, onPress }: Props) {
    const { id, name, annualPercentage } = investment;

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <Text style={styles.label}><Text style={styles.text}>{annualPercentage}%</Text> de Ganho anual</Text>

            <Button text='Ver mais detalhes' onPress={() => onPress(id)} />
        </View>
    );
}