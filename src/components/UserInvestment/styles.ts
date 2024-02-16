import { StyleSheet } from 'react-native';
import { themeColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: themeColor,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 2,
        borderRadius: 8,
        width: 160
    },
    title: {
        fontSize: 24,
        color: '#fff',
        marginBottom: 4,
        fontWeight: 'bold'
    },
    label: {
        fontSize: 16,
        color: '#fff'
    },
    text: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    yielded: {
        fontSize: 16,
        color: '#00ff00',
        fontWeight: 'bold'
    }
});