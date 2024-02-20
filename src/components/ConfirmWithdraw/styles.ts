import { StyleSheet } from 'react-native';
import { errorColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10
    },
    label: {
        fontSize: 16
    },
    warning: {
        fontSize: 16,
        color: errorColor,
        fontWeight: 'bold'
    },
    value: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    buttons: {
        gap: 4
    }
});