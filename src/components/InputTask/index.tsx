
import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";

import { styles } from "./styles";

interface Props {
    AddingText: (text: string) => void;
}

export function InputTask({ AddingText }: Props) {
    const [task, setTask] = useState("")

    function onPressButton() {
        AddingText(task);
        setTask("");
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputTask}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor="#6b6b6b"
                value={task}
                onChangeText={setTask}
            />
            <TouchableOpacity
                style={styles.addButton}
                onPress={onPressButton}
            >
                <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}