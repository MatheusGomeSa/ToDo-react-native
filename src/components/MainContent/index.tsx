import { View, FlatList, Text } from "react-native";
import { Task } from "../Task";
import { CompletTask } from "../CompletTask";
import { NoData } from "../NoData";

import { styles } from "./styles";
import { useState } from "react";

import { TaskProps } from "../../screen/Home"

interface Props {
    tasks: TaskProps[];
    concluidTasks: number;
    removeTask: (id: number, isCompleted: boolean) => void;
    toggleConcluidTask: (id: number) => void;
}

export function MainContent({ tasks, removeTask, toggleConcluidTask, concluidTasks }: Props) {
    return (
        <View
            style={styles.container}
        >
            <View
                style={styles.contentHeader}
            >
                <View style={styles.headerContentText}>
                    <Text
                        style={styles.headerCreatedText}
                    >Criadas </Text>
                    <Text style={styles.tag}>{tasks.length}</Text>
                </View>
                <View
                    style={styles.headerContentText}
                >
                    <Text
                        style={styles.headerConcludedText}
                    >Concluidas </Text>
                    <Text style={styles.tag}>{concluidTasks}</Text>
                </View>
            </View>
            <View>
                <FlatList
                    data={tasks}
                    renderItem={
                        ({ item }) => (
                            <Task
                                key={item.id}
                                text={item.text}
                                isCompleted={item.isCompleted}
                                onRemove={() => removeTask(item.id, item.isCompleted)}
                                toggleConcluidTask={() => toggleConcluidTask(item.id)}
                            />
                        )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <NoData />
                    )}
                />
            </View>
        </View >
    )
}