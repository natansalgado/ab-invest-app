import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';

import * as actions from './actions';
import * as homeActions from '../HomeScreen/actions';
import { Button } from '../../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'ConfirmTransfer'>

export function ConfirmTransfer({ navigation, route }: Props) {
    const { senderKey, receiverKey, value, userToken } = route.params;
    const [receiverData, setReceiverData] = useState<ReceiverData | null>(null)
    const [error, setError] = useState('')

    const handleConfirmTransfer = async () => {

    }

    const goBack = () => {
        navigation.goBack();
    }

    useEffect(() => {
        actions.checkAccount(userToken, { senderKey, receiverKey, value }, setReceiverData, setError)
    }, [])

    return (
        <View style={styles.container}>
            {
                receiverData ?
                    <>
                        <Text style={styles.header}>Confirme os seguintes dados</Text>
                        <Text style={styles.label}>Chave da conta</Text>
                        <Text style={styles.value}>{receiverData.receiverKey}</Text>
                        <Text style={styles.label}>Nome</Text>
                        <Text style={styles.value}>{receiverData.receiverName}</Text>
                        <Text style={styles.label}>Valor</Text>
                        <Text style={styles.value}>{homeActions.format(receiverData.value)}</Text>
                        <Button text='Confirmar' onPress={handleConfirmTransfer} />
                    </>
                    :
                    error &&
                    <>
                        <Text style={styles.error}>{error}</Text>
                        <Button text='Voltar' onPress={goBack} />
                    </>
            }
        </ View >
    );
}