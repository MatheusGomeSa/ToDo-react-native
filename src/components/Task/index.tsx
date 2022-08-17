import { View, TouchableOpacity, Text, Image } from "react-native";
import TaskButtom from "../../../assets/taskbutton.png";
import TrashIcon from "../../../assets/trash.png";

import { CompletTask } from "../CompletTask"

import { styles } from "./style";

interface TasksProps {
    text: string;
    isCompleted: boolean;
    onRemove: () => void;
    toggleConcluidTask: () => void;
}

export function Task({ isCompleted, text, onRemove, toggleConcluidTask }: TasksProps) {
    if (isCompleted) {
        return <CompletTask
            isCompleted={isCompleted}
            text={text}
            onRemove={onRemove}
            toggleConcluidTask={toggleConcluidTask}
        />
    }

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