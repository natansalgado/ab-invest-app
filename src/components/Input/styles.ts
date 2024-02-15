import { StyleSheet } from 'react-native';
import { errorColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 8,
        marginVertical: 5
    },
    unavailable: {
        color: errorColor
    }
});