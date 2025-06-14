export interface GetToDoItemsParams {
    search: string
    orderBy: string
    orderDirection: string
    page: number
    itemsPerPage: number
    priority: number | null
    dueDate: Date | null
    finishDate: Date | null
    includeCompleted: boolean | null
}