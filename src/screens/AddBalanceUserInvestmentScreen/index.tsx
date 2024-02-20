import React, { useEffect, useState } from 'react';
import { Modal, RefreshControl, ScrollView, Text, TouchableOpacity } from 'react-native';

import * as actions from './actions';
import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { format, loadInfos } from '../../actions/actions';
import { Balance } from '../../components/Balance';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ConfirmAddBalance } from '../../components/ConfirmAddBalance';

type Props = NativeStackScreenProps<RootStackParamList, 'AddBalanceUserInvestment'>

export function AddBalanceUserInvestmentScreen({ navigation, route }: Props) {
    const { id, setUserToken, userToken, userInvestment } = route.params;
    const [userData, setUserData] = useState<UserData | null>(null);
    const [accountData, setAccountData] = useState<AccountData | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState('');
    const [value, setValue] = useState(0);
    const [refreshing, setRefreshing] = useState(false);

    const handleConfirm = () => {
        actions.confirmAddBalance(userToken, setUserToken, id, setError, value, navigation, setModalOpen);
    }

    const handleChangeText = (key: string, value: string) => {
        value = value.replace(/[^0-9]/g, '');
        setValue(Number(value) / 100);
    }

    const handleRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            loadInfos(userToken, setUserToken, setUserData, setAccountData);
            setRefreshing(false);
        }, 1000);
    }

    const goBack = () => {
        navigation.goBack();
    }

    useEffect(() => {
        loadInfos(userToken, setUserToken, setUserData, setAccountData);
    }, []);

    return (
        <ScrollView style={styles.container}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
        >
            {!error && accountData ?
                <>
                    <Text style={styles.title}>Adicionar saldo ao investimento</Text>

                    <Balance balance={accountData?.balance} unavailable={accountData.balance < value} />

                    <Input keyBoardType='numeric' value={format(value)} valueKey='' unavailable={accountData.balance < value} onChangeText={handleChangeText} />

                    <TouchableOpacity onPress={() => setValue(accountData.balance)}>
                        <Text style={styles.link}>Todo saldo</Text>
                    </TouchableOpacity>

                    <Button text='Adicionar' onPress={() => setModalOpen(true)} disabled={!value || accountData.balance < value} />

                    <Modal visible={modalOpen}>
                        <ConfirmAddBalance value={value} userInvestment={userInvestment} confirm={handleConfirm} cancel={() => setModalOpen(false)} />
                    </Modal>
                </>
                :
                <>
                    <ErrorMessage message={error || 'Erro ao tentar acessar o servidor'} />
                    <Button text='Voltar' onPress={goBack} />
                </>
            }
        </ScrollView>
    );
}