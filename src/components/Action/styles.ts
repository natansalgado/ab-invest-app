import { StyleSheet } from 'react-native';
import { themeColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    button: {
        marginTop: 10,
        backgroundColor: themeColor,
        width: 80,
        height: 80,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2
    },
    buttonText: {
        marginTop: 5,
        fontSize: 14
    }
});