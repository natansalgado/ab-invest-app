import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { format as moneyFormat } from '../../actions/actions';
import { format as dateFormat } from 'date-fns';

interface Props {
    userInvestment: UserInvestment;
}

export function UserInvestmentInfos({ userInvestment }: Props) {
    const { name, balance, initialValue, endDate, startDate, addedValue } = userInvestment;
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <Text style={styles.label}>Saldo atual</Text>
            <Text style={styles.text}>{moneyFormat(balance)}</Text>

            <Text style={styles.label}>Valor rendido</Text>
            <Text style={styles.yielded}>{moneyFormat(balance - initialValue - addedValue)}^</Text>

            <Text style={styles.label}>Valor inicial</Text>
            <Text style={styles.text}>{moneyFormat(initialValue)}</Text>

            <Text style={styles.label}>Valor adicionado desde a criação</Text>
            <Text style={styles.text}>{moneyFormat(addedValue)}</Text>

            <Text style={styles.label}>Data de criação</Text>
            <Text style={styles.text}>{dateFormat(startDate, 'dd/MM/yyyy - HH:mm')}</Text>

            <Text style={styles.label}>Saque disponível</Text>
            <Text style={styles.text}>{dateFormat(endDate, 'dd/MM/yyyy - HH:mm')}</Text>
        </View>
    );
}