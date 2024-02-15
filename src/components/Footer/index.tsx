import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

interface Props {
    text: string;
    linkText: string;
    onPress: () => void;
}

export function Footer({ text, linkText, onPress }: Props) {
    return (
        <View style={styles.footer}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity onPress={onPress}>
                <Text style={styles.linkText}>{linkText}</Text>
            </TouchableOpacity>
        </View>
    );
}