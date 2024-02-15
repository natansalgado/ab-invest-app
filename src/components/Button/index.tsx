import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

interface Props {
    text: string;
    disabled?: boolean;
    onPress: () => void;
}

export function Button({ text, onPress, disabled }: Props) {
    return (
        <TouchableOpacity
            style={[styles.container, disabled && styles.buttonDisabled]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}