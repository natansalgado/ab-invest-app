import { Text } from 'react-native';

import { styles } from './styles';

interface Props {
    message: string;
}

export function ErrorMessage({ message }: Props) {
    return (
        <Text style={styles.error}>{message}</Text>
    );
}