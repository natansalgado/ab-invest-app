import { StyleSheet } from 'react-native';
import { themeColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    card: {
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
        borderRadius: 8,
        borderWidth: 2,
        width: '32%'
    },
    selectCard: {
        backgroundColor: themeColor,
        color: '#fff'
    },
    text: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    selectText: {
        color: '#fff'
    }
});