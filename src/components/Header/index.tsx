import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';

interface Props {
    name: string;
    onPress: () => void;
}

export function Header({ name, onPress}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Olá, {name}</Text>

            <TouchableOpacity onPress={onPress}>
                <FontAwesome name="gear" size={30} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}