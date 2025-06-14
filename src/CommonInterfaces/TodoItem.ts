export interface TodoItem {
    id: string,
    title: string,
    description: string,
    priority: number,
    dueDate: Date,
    finishDate: Date | undefined,
    categoryId: string,
    categoryName: string,
    categoryDescription: string,
    isTempDeleted: boolean
}