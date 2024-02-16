import { StyleSheet } from 'react-native';
import { errorColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    error: {
        backgroundColor: '#f8d7da',
        marginBottom: 6,
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontSize: 18,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#f5c6cb",
        fontWeight: 'bold',
        color: errorColor
    }
});