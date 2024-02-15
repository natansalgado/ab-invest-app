import { StyleSheet } from 'react-native';
import { themeColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 15,
        paddingBottom: 10,
        backgroundColor: themeColor,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: '#fff',
        fontSize: 24
    },
});