import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as actions from './actions'

import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export function HomeScreen({ navigation, route }: Props) {
    const { userToken, setUserToken } = route.params;
    const [userData, setUserData] = useState<UserData>({
        id: 0,
        name: "",
        role: ""
    })
    const [accountData, setAccountData] = useState<AccountData>({
        id: 0,
        balance: 0,
        accountKey: "",
        userId: 0
    })

    useEffect(() => {
        actions.loadInfos(userToken, setUserToken, setUserData, setAccountData);
    }, []);

    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Olá, {userData.name}</Text>
            </View>

            <View style={styles.balance}>
                <Text style={styles.balanceText}>Saldo atual</Text>
                <Text style={styles.balanceText2}>R$ {accountData.balance.toFixed(2).replace(".", ",")}</Text>
            </View>
        </View>
    );
}