import { Priority } from "./Priority";

export interface TodoItemProps {
    title: string,
    description: string,
    priority: Priority,
    dueDate: Date,
    categoryId: string,
    categoryName: string,
    finishDate: Date | undefined,
}