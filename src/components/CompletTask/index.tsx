import { View, TouchableOpacity, Text, Image } from "react-native";
import TaskButtom from "../../../assets/check.png";
import TrashIcon from "../../../assets/trash.png";

import { styles } from "./styles";

interface TasksProps {
    text: string;
    isCompleted: boolean;
    onRemove: () => void;
    toggleConcluidTask: () => void;
}

export function CompletTask({ text, onRemove, toggleConcluidTask }: TasksProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={toggleConcluidTask}
            >
                <Image
                    source={TaskButtom}
                />
            </TouchableOpacity>
            <Text
                style={styles.textTask}
            >
                {text}
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={onRemove}
            >
                <Image
                    source={TrashIcon}
                />
            </TouchableOpacity>
        </View>
    )
}