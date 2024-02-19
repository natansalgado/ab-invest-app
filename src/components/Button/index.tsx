import { TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';

interface Props {
    text: string;
    disabled?: boolean;
    onPress: () => void;
    cancel?: boolean
}

export function Button({ text, onPress, disabled, cancel }: Props) {
    return (
        <TouchableOpacity
            style={[styles.container, cancel && styles.cancel, disabled && styles.buttonDisabled]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}