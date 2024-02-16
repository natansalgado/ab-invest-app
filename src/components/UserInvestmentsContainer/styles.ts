import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: "#ccc"
    },
    label: {
        fontSize: 18,
        marginLeft: 15
    },
    scroll: {
        marginVertical: 10,
        flexDirection: 'row',
        gap: 1
    },
    insiderContainer: {
        marginHorizontal: 15,
        width: '100%',
        flexDirection: 'row',
        gap: 10
    }
});