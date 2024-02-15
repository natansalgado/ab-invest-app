import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';

import * as actions from './actions';
import { format } from '../../actions/actions';
import { Button } from '../../components/Button';
import { ErrorMessage } from '../../components/ErrorMessage';

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
                        <Text style={styles.label}>Nome do destinatário</Text>
                        <Text style={styles.value}>{receiverData.receiverName}</Text>
                        <Text style={styles.label}>Valor</Text>
                        <Text style={styles.value}>{format(receiverData.value)}</Text>
                        <Button text='Confirmar' onPress={handleConfirmTransfer} />
                    </>
                    :
                    error &&
                    <>
                        <ErrorMessage message={error} />
                        <Button text='Voltar' onPress={goBack} />
                    </>
            }
        </ View >
    );
}