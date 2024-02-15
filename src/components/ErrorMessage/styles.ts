import { StyleSheet } from 'react-native';
import { errorColor } from '../../constants/colors';

export const styles = StyleSheet.create({
    error: {
        backgroundColor: '#f8d7da',
        marginBottom: 2,
        paddingTop: 8,
        padding: 5,
        fontSize: 18,
        textAlign: 'center',
        borderWidth: 2,
        borderRadius: 8,
        borderColor: "#f5c6cb",
        fontWeight: 'bold',
        color: errorColor
    }
});