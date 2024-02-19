import React, { useEffect, useState } from 'react';
import { View, Modal } from 'react-native';

import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { format, loadInfos } from '../../actions/actions';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Balance } from '../../components/Balance';
import { ConfirmTransfer } from '../../components/ConfirmTransfer';
import * as actions from './actions';

type Props = NativeStackScreenProps<RootStackParamList, 'Transfer'>

export function TransferScreen({ navigation, route }: Props) {
    const { userToken, setUserToken } = route.params;
    const [userData, setUserData] = useState<UserData | null>(null);
    const [accountData, setAccountData] = useState<AccountData | null>(null);
    const [accountKey, setAccountKey] = useState('');
    const [value, setValue] = useState(0);
    const [disabled, setDisabled] = useState(true);

    const [receiverData, setReceiverData] = useState<ReceiverData | null>(null)
    const [error, setError] = useState('')
    const [modalOpen, setModalOpen] = useState(false);

    const handleConfirmTransfer = async () => {
        await actions.confirmTransfer(userToken, { senderKey: accountData?.accountKey || '', receiverKey: accountKey, value }, setError, navigation);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const handleCheckReceiverAccount = async () => {
        await actions.checkAccount(userToken, { senderKey: accountData?.accountKey || '', receiverKey: accountKey, value }, setReceiverData, setError)
        setModalOpen(true);
    }

    const handleValue = (key: any, value: string) => {
        value = value.replace(/[^0-9]/g, '');
        setValue((Number(value) / 100));
    }

    useEffect(() => {
        loadInfos(userToken, setUserToken, setUserData, setAccountData);
    }, [])

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

            <Button text='Continuar' disabled={disabled} onPress={handleCheckReceiverAccount} />

            <Modal visible={modalOpen}>
                <ConfirmTransfer confirm={handleConfirmTransfer} error={error} receiverData={receiverData} cancel={closeModal} />
            </Modal>
        </View>
    );
}