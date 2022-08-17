import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#262626",
        width: 320,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#333333",
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
        color: "#F2F2F2"
    },
    button: {
        padding: 8
    }
})