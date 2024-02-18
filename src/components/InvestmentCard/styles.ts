import { StyleSheet } from 'react-native';
import { themeColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: themeColor,
        borderWidth: 2,
        borderRadius: 8,
        marginBottom: 8
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    label: {
        marginTop: 5,
        fontSize: 16,
        color: '#fff'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }
});