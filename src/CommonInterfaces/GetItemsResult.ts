import { PaginationResult } from "./PaginationResult";
import { ToDoItemGet } from "./ToDoItemGet";
import { ValidationResult } from "./ValidationResult";

export interface GetItemsResult {
    data: ToDoItemGet[]
    pagination: PaginationResult
    validationResult: ValidationResult
}