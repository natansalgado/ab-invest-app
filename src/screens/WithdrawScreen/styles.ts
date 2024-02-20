import { StyleSheet } from 'react-native';
import { errorColor, themeColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    label: {
        fontSize: 16,
        marginTop: 10
    },
    warning: {
        fontSize: 16,
        color: errorColor,
        fontWeight: 'bold'
    },
    value: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    unavailable: {
        color: errorColor
    },
    link: {
        color: themeColor,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    }
});