import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: "row",
        alignItems: "center",
        top: -27
    },
    inputTask: {
        flex: 1,
        backgroundColor: "#262626",
        height: 52,
        borderRadius: 4,
        color: "#F2F2F2",
        padding: 14,
        fontSize: 16,
        marginRight: 6
    },
    addButton: {
        width: 52,
        height: 52,
        backgroundColor: "#1E6F9F",
        alignItems: "center",
        borderRadius: 4,
        justifyContent: "center",
    },
    textButton: {
        color: "#F2F2F2"
    }
})