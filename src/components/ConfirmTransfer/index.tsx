import { View, Text } from 'react-native';

import { styles } from './styles';

import { format } from '../../actions/actions';
import { Button } from '../../components/Button';
import { ErrorMessage } from '../../components/ErrorMessage';
import { FakeHeader } from '../FakeHeader';

interface Props {
    receiverData: ReceiverData | null;
    error: string;
    confirm: () => void;
    cancel: () => void;
}

export function ConfirmTransfer({ receiverData, error, confirm, cancel }: Props) {
    return (
        <>
            <FakeHeader />
            <View style={styles.container}>
                {
                    !error && receiverData ?
                        <>
                            <Text style={styles.header}>Confirme os seguintes dados</Text>
                            <Text style={styles.label}>Chave da conta</Text>
                            <Text style={styles.value}>{receiverData.receiverKey}</Text>
                            <Text style={styles.label}>Nome do destinatário</Text>
                            <Text style={styles.value}>{receiverData.receiverName}</Text>
                            <Text style={styles.label}>Valor</Text>
                            <Text style={styles.value}>{format(receiverData.value)}</Text>
                            <Button text='Confirmar' onPress={confirm} />
                            <Button text='Cancelar' onPress={cancel} cancel />
                        </>
                        :
                        <>
                            <ErrorMessage message={error} />
                            <Button text='Voltar' onPress={cancel} />
                        </>
                }
            </ View >
        </>
    );
}