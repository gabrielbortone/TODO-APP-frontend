import { Key, useState } from "react";
import { TaskScheduleContainer } from "./styles";
import { TaskItem } from "../TaskItem";
import { TodoItem } from "../../CommonInterfaces/TodoItem";

export default function TasksSchedule() {
    const [tasks, setTasks] = useState<TodoItem[]>([]);

    return (    
        <TaskScheduleContainer>
            {tasks.map((taskItem: TodoItem, index: Key | null | undefined) => (
                <TaskItem key={index} {...taskItem} />
            ))}
        </TaskScheduleContainer>
    );
}