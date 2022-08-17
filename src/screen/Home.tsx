import { useState } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Header } from '../../src/components/Header';
import { InputTask } from '../../src/components/InputTask';
import { MainContent } from '../../src/components/MainContent';

export interface TaskProps {
    id: number;
    text: string;
    isCompleted: boolean;
}

const data = [
    { "id": 1, "isCompleted": false, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { "id": 2, "isCompleted": false, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { "id": 3, "isCompleted": false, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { "id": 4, "isCompleted": false, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { "id": 5, "isCompleted": false, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { "id": 6, "isCompleted": false, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { "id": 7, "isCompleted": false, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." },
    { "id": 8, "isCompleted": false, text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." }
]

export default function Home() {

    const [taskData, setTaskData] = useState([] as TaskProps[]);
    const [concluidTasks, setConcluidTasks] = useState(0);


    function handleAddingTask(text: string) {
        let id: number;
        id = Math.round(Math.random() * 1000000)
        setTaskData((prevState) => [...prevState, {
            id,
            isCompleted: false,
            text
        }]);
    }
    function handleToggleConcluidTask(id: number) {
        let prevState = taskData;
        let taskIndex = taskData.findIndex(task => task.id === id);
        let state = taskData.filter(task => task.id != id)

        prevState[taskIndex].isCompleted = !prevState[taskIndex].isCompleted

        if (prevState[taskIndex].isCompleted) {
            state.push(prevState[taskIndex]);
            setConcluidTasks(prevValue => prevValue + 1);
        } else {
            state.unshift(prevState[taskIndex]);
            setConcluidTasks(prevValue => prevValue - 1);
        }
        setTaskData(state);
    }

    function handleRemoveTask(id: number, isCompleted: boolean) {
        setTaskData((prevState) => [
            ...prevState.filter((task) => task.id != id)
        ]);
        if (isCompleted) {
            setConcluidTasks(prevValue => prevValue - 1);
        }

    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#1A1A1A",
            }}
        >
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <Header />
            <InputTask
                AddingText={handleAddingTask}
            />
            <MainContent
                tasks={taskData}
                removeTask={handleRemoveTask}
                toggleConcluidTask={handleToggleConcluidTask}
                concluidTasks={concluidTasks}
            />
        </ View >
    );
}