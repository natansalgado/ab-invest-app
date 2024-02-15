import { StyleSheet } from 'react-native';
import { errorColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    label: {
        fontSize: 18
    },
    balance: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    unavailable: {
        color: errorColor
    }
});