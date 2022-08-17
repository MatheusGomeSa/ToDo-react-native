import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#262626",
        width: 320,
        border: 4,
        borderRadius: 4,
        borderColor: "#808080",
        height: 64,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
        padding: 12
    },
    textTask: {
        flex: 1,
        marginHorizontal: 4,
        fontSize: 14,
        color: "#808080",
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
        textDecorationColor: "#000"

    },
    button: {
        padding: 8
    }
})