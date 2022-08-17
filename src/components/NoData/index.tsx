import { View, Image, Text } from "react-native";

import noContentImage from "../../../assets/Clipboard.png";

import { styles } from "./styles";

export function NoData() {
    return (
        <View style={styles.container}>
            <Image
                source={noContentImage}
            />
            <Text
                style={styles.title}
            >
                Você ainda não tem tarefas cadastradas
            </Text>

            <Text
                style={styles.text}
            >
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}