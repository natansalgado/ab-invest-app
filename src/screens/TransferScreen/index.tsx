import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { format, loadInfos } from '../../actions/actions';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Balance } from '../../components/Balance';

type Props = NativeStackScreenProps<RootStackParamList, 'Transfer'>

export function TransferScreen({ navigation, route }: Props) {
    const { userToken, setUserToken } = route.params;
    const [userData, setUserData] = useState<UserData | null>(null);
    const [accountData, setAccountData] = useState<AccountData | null>(null);
    const [accountKey, setAccountKey] = useState('');
    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(true);

    const handleValue = (key: any, value: string) => {
        value = value.replace(/[^0-9]/g, '');
        setValue((Number(value) / 100).toString());
    }

    const goToConfirmTransferScreen = () => {
        navigation.navigate('ConfirmTransfer', { senderKey: accountData ? accountData.accountKey : '', receiverKey: accountKey, value: Number(value), userToken });
    }

    useEffect(() => {
        loadInfos(userToken, setUserToken, setUserData, setAccountData);
    }, []);

    useEffect(() => {
        setDisabled(Number(value) <= 0 || !accountKey || Number(value) > (accountData ? accountData.balance : 0));
    }, [value, accountKey]);

    return (
        <View style={styles.container}>
            <View style={styles.balanceContainer}>
                <Balance balance={accountData ? accountData.balance : 0} unavailable={(accountData ? accountData.balance : 0) < Number(value)} />
            </View>

            <Input placeHolder='Chave da conta' value={accountKey} valueKey='' keyBoardType='default' onChangeText={(k, v) => setAccountKey(v)} />

            <Input keyBoardType='numeric' value={format(Number(value))} valueKey='' unavailable={(accountData ? accountData.balance : 0) < Number(value)} onChangeText={handleValue} />

            <Button text='Continuar' disabled={disabled} onPress={goToConfirmTransferScreen} />
        </View>
    );
}