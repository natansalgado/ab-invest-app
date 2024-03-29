import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import { styles } from './styles';
import { UserInvestment } from '../UserInvestment';

interface Props {
    userInvestments: UserInvestment[];
    navigate?: () => void;
    onPress: (id: number) => void;
}

export function UserInvestmentsContainer({ userInvestments, onPress }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Meus Investimentos</Text>

            <ScrollView horizontal style={styles.scroll} showsHorizontalScrollIndicator={false}>
                <View style={styles.insiderContainer}>
                    {userInvestments.map((data, i) =>
                        <UserInvestment key={i} data={data} onPress={() => onPress(data.id)} />
                    )}
                </View>
            </ScrollView>
        </View >
    );
}