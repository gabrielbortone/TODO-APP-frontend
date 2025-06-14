export interface TodoItem {
    id: string,
    title: string,
    description: string,
    priority: number,
    dueDate: Date | null,
    finishDate: Date | null,
    categoryId: string,
    categoryName: string,
    categoryDescription: string,
    isTempDeleted: boolean
}