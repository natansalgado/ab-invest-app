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
    unavailable: {
        color: errorColor
    },
    links: {
        flexDirection: 'row',
        gap: 10,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    link: {
        color: themeColor,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    }
});