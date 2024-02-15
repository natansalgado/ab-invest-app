import { Text } from 'react-native';

import { styles } from './styles';

interface Props {
    text: string
}

export function Title({ text }: Props) {
    return (
        <Text style={styles.title}>{text}</Text>
    );
}