import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    itemCard: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        flex: 1,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        paddingVertical: 8,
    },
    animationView: {
        width: 40,
        height: 40
    },
    itemMoney: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:8
    },
    textItemCard:{
        fontSize:15,
        fontWeight:'500',
        color:'black'
    },
    textMoney:{
        fontSize:14,
        fontWeight:'bold',
        color:'red'
    }
})