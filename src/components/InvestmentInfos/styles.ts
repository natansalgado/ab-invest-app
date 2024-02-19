import { StyleSheet } from 'react-native';
import { errorColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 5,
        marginBottom: 10
    },
    label: {
        fontSize: 16
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    unavailable: {
        color: errorColor
    },
});