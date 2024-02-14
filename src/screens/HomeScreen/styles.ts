import { StyleSheet } from 'react-native';

export const themeColor = "#00aacc"

export const styles = StyleSheet.create({
    header: {
        paddingTop: 40,
        paddingHorizontal: 15,
        paddingBottom: 10,
        backgroundColor: themeColor,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerText: {
        color: '#fff',
        fontSize: 24
    },

    field: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        borderColor: "#ccc"
    },
    fieldText: {
        fontSize: 18
    },
    fieldText2: {
        fontSize: 22
    },

    buttons: {
        flexDirection: 'row',
        gap: 10
    },

    buttonContainer: {
        alignItems: 'center'
    },
    buttonButton: {
        marginTop: 10,
        backgroundColor: themeColor,
        width: 80,
        height: 80,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        marginTop: 5,
        fontSize: 14
    }
});