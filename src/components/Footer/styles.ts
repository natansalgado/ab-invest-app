import { StyleSheet } from 'react-native';
import { themeColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    footer: {
        marginTop: 10,
        flexDirection: 'row',
        gap: 5
    },
    text: {
        fontSize: 18,
    },
    linkText: {
        fontSize: 18,
        color: themeColor,
    }
});