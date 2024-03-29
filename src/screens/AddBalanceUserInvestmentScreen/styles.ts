import { StyleSheet } from 'react-native';
import { themeColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    link: {
        color: themeColor,
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    }
});