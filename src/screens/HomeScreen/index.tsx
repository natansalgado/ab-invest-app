import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as actions from './actions'

import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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

    const goToTransferScreen = () => {
        navigation.navigate('Transfer', { userToken, setUserToken });
    }

    useEffect(() => {
        actions.loadInfos(userToken, setUserToken, setUserData, setAccountData);
    }, []);

    return (
        <View>
            <StatusBar style='light' />
            <View style={styles.header}>
                <Text style={styles.headerText}>Olá, {userData.name}</Text>
                <FontAwesome name="gear" size={30} color="#fff" />
            </View>

            <View style={styles.field}>
                <Text style={styles.fieldText}>Saldo atual</Text>

                <Text style={styles.fieldText2}>{actions.format(accountData.balance)}</Text>
            </View>

            <View style={styles.field}>
                <Text style={styles.fieldText}>Ações</Text>

                <View style={styles.buttons}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonButton} onPress={goToTransferScreen}>
                            <MaterialIcons name="pix" color="#fff" size={50}></MaterialIcons>
                        </TouchableOpacity>
                        <Text style={styles.buttonText}>Transferência</Text>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonButton}>
                            <FontAwesome name="dollar" size={44} color="#fff" />
                        </TouchableOpacity>
                        <Text style={styles.buttonText}>Investimentos</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}