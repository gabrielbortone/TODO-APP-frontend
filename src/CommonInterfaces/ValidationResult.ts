import { ErrorResult } from "./ErrorResult";

export interface ValidationResult {
    isValid: boolean,
    errors: ErrorResult[]
}