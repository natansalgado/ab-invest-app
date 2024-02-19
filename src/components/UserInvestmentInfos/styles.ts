import { StyleSheet } from 'react-native';
import { errorColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        paddingBottom: 5,
        marginBottom: 10
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    },
    label: {
        fontSize: 16
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    yielded: {
        fontSize: 18,
        color: '#00aa00',
        fontWeight: 'bold'
    }
});