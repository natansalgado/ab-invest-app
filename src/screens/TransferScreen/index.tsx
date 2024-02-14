import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import * as homeActions from '../HomeScreen/actions';
import { Button } from '../../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'Transfer'>

export function TransferScreen({ navigation, route }: Props) {
    const { userToken, setUserToken } = route.params;
    const [userData, setUserData] = useState<UserData>({
        id: 0,
        name: '',
        role: ''
    });
    const [accountData, setAccountData] = useState<AccountData>({
        id: 0,
        balance: 0,
        accountKey: '',
        userId: 0
    });
    const [accountKey, setAccountKey] = useState('');
    const [value, setValue] = useState('')
    const [disabled, setDisabled] = useState(true);

    const handleValue = (value: string) => {
        value = value.replace(/[^0-9]/g, '');
        setValue((Number(value) / 100).toString())
    }

    const goToConfirmTransferScreen = () => {
        navigation.navigate('ConfirmTransfer', { senderKey: accountData.accountKey, receiverKey: accountKey, value: Number(value), userToken })
    }

    useEffect(() => {
        homeActions.loadInfos(userToken, setUserToken, setUserData, setAccountData);
    }, [])

    useEffect(() => {
        setDisabled(Number(value) <= 0 || !accountKey || Number(value) > accountData.balance);
    }, [value, accountKey])

    return (
        <View style={styles.container}>
            <View style={styles.balanceContainer}>
                <Text style={styles.balanceText}>Saldo atual</Text>
                <Text style={styles.balanceText2}>{homeActions.format(accountData.balance)}</Text>
            </View>

            <TextInput style={styles.input} placeholder='Chave da conta' value={accountKey} onChangeText={(t) => setAccountKey(t)} />

            <TextInput
                style={styles.input}
                keyboardType='numeric'
                value={homeActions.format(Number(value))}
                onChangeText={(t) => handleValue(t)}
                caretHidden={true}
            />

            <Button text='Continuar' disabled={disabled} onPress={goToConfirmTransferScreen} />
        </View>
    );
}