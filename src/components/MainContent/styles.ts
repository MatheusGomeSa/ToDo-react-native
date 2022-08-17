import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 5,
        marginBottom: 40
    },
    contentHeader: {
        flexDirection: "row",
        width: 320,
        justifyContent: "space-between"
    },
    headerContentText: {
        flexDirection: "row",
        marginBottom: 21
    },
    tag: {
        marginLeft: 8,
        backgroundColor: "#333333",
        borderRadius: 999,
        paddingHorizontal: 8,
        color: "#D9D9D9",
        fontWeight: "bold"
    },
    headerCreatedText: {
        color: "#4EA8DE",
        fontWeight: "bold",
    },
    headerConcludedText: {
        color: "#8284FA",
        fontWeight: "bold",
    }
})