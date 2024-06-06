import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textInput:{
        fontSize: 18,
        color: 'black',
        marginBottom: 8
    },
    mButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40
    },
    textButton:{
        fontSize: 18,
        color: 'white',
        fontWeight:'500'
    },
    button: {
        height: 40,
        flex: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1.5
    }
})