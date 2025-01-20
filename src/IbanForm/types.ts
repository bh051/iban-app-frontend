import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

export interface ErrorResponse {
    errorCode: string;
    error: string;
}

export interface IbanResponse {
    valid: string;
    iban: string;
    bank: BankDataResponse
}

export interface BankDataResponse {
    bankCode: string;
    name: string;
    zip: string;
    city: string;
    bic: string;
}

export interface IbanInputProps { register: UseFormRegister<FieldValues>, errors: FieldErrors<FieldValues> }

export interface SubmitButtonProps { loading: boolean }
