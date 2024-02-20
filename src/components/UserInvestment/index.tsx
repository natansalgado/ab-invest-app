import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { format as moneyFormat } from '../../actions/actions';
import { Button } from '../Button';

interface Props {
    data: UserInvestment;
    onPress: () => void;
}

export function UserInvestment({ data, onPress }: Props) {
    return (
        <View style={styles.container}>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.title}>{data.name}</Text>

            <Text numberOfLines={1} style={styles.text}>{moneyFormat(data.balance)}</Text>

            <Text numberOfLines={1} style={styles.yielded}>{moneyFormat(data.balance - data.initialValue - data.addedValue)} ^</Text>

            <Button text='Detalhes' onPress={onPress} />
        </View>
    );
}