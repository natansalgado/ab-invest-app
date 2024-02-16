import { View, Text } from 'react-native';
import { format } from '../../actions/actions';

import { styles } from './styles';

interface Props {
    balance: number;
    unavailable?: boolean
}

export function Balance({ balance, unavailable }: Props) {
    return (
        <>
            <Text style={styles.label}>Saldo atual</Text>
            <Text style={[styles.balance, unavailable && styles.unavailable]}>{format(balance)}</Text>
        </>
    );
}