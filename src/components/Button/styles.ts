import { StyleSheet } from 'react-native';
import { themeColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        paddingVertical: 8,
        paddingHorizontal: 10,
        backgroundColor: themeColor,
        borderWidth: 2,
        borderRadius: 8
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
        textAlign: 'center'
    },
    buttonDisabled: {
        opacity: 0.4
    },
});