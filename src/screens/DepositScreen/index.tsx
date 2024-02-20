import React, { useEffect, useState } from 'react';
import { Modal, Text, View } from 'react-native';

import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { format, loadInfos } from '../../actions/actions';
import { Balance } from '../../components/Balance';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { PaymentMethods } from '../../components/PaymentMethods';
import { ConfirmDeposit } from '../../components/ConfirmDeposit';
import * as actions from './actions';

type Props = NativeStackScreenProps<RootStackParamList, 'Deposit'>

export function DepositScreen({ navigation, route }: Props) {
    const { userToken, setUserToken } = route.params;
    const [userData, setUserData] = useState<UserData | null>(null);
    const [accountData, setAccountData] = useState<AccountData | null>(null);
    const [value, setValue] = useState(0);
    const [select, setSelect] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const handleTextChange = (key: string, value: string) => {
        value = value.replace(/[^0-9]/g, '');
        setValue((Number(value) / 100));
    }

    const goBack = () => {
        navigation.goBack();
    }

    const handleConfirm = () => {
        if (!accountData) return;

        actions.confirmDeposit(userToken, { accountId: accountData.id, paymentMethod: select, value }, navigation);
    }

    useEffect(() => {
        loadInfos(userToken, setUserToken, setUserData, setAccountData);
    }, []);

    return (
        <View style={styles.container}>
            {userData && accountData ?
                <>
                    <Balance balance={accountData.balance} />

                    <Text style={styles.label}>Valor que deseja adicionar</Text>
                    <Input value={format(value)} onChangeText={handleTextChange} keyBoardType='default' valueKey='' />

                    <Text style={styles.label}>Método de pagamento</Text>
                    <PaymentMethods select={select} setSelect={setSelect} />

                    <Button text='Continuar' onPress={() => setModalOpen(true)} disabled={!value || !select} />

                    <Modal visible={modalOpen}>
                        <ConfirmDeposit balance={accountData.balance} value={value} select={select} confirm={handleConfirm} cancel={() => setModalOpen(false)} />
                    </Modal>
                </>
                :
                <>
                    <ErrorMessage message='Erro ao tentar acessar o servidor' />
                    <Button text='Voltar' onPress={goBack} />
                </>
            }
        </View>
    );
}