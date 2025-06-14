export interface ToDoItemGet {
    id: string
    title: string
    description: string
    priority: number
    dueDate: Date | null
    finishDate: Date | null
    categoryId: string
    categoryName: string
    categoryDescription: string
}