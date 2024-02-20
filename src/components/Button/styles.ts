import { StyleSheet } from 'react-native';
import { cancelColor, themeColor } from '../../constants/colors';

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
        fontSize: 18,
        color: "#fff",
        textAlign: 'center',
        width: '100%',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    buttonDisabled: {
        opacity: 0.4
    },
    cancel: {
        backgroundColor: cancelColor
    }
});