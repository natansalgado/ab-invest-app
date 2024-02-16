import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { format as moneyFormat } from '../../actions/actions';


interface Props {
    userInvestments: UserInvestment[]
}

export function TotalUserInvestments({ userInvestments }: Props) {

    const calcTotal = () => {
        let total = 0;

        userInvestments.forEach(investiment => {
            total += investiment.balance;
        });

        return total;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Total em investimentos</Text>
            <Text style={styles.total}>{moneyFormat(calcTotal())}</Text>
        </View>
    );
}