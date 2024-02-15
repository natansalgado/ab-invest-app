import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface Props {
    text: string;
    onPress: () => void;
    children: any
}

export function Action({ text, onPress, children }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                {children}
            </TouchableOpacity>
            <Text style={styles.buttonText}>{text}</Text>
        </View>
    );
}