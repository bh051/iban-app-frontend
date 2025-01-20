import { Form, useForm } from "react-hook-form"
import { ErrorResponse, IbanResponse } from "./types"
import { useState } from "react"
import { IbanInput } from "./IbanInput"
import { SubmitButtonWithLoadingSpinner } from "./SubmitButtonWithLoadingSpinner"
import { renderErrors, renderResults } from "./helper"

export function IbanForm() {

    const { register, control, formState: { errors } } = useForm()

    const [apiResult, setApiResult] = useState<IbanResponse | null>(null)
    const [apiError, setApiError] = useState<ErrorResponse | null>(null)
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = () => {
        setApiResult(null);
        setApiError(null);
        setLoading(true)
    }

    const handleResponse = (res: Response) => {
        res.json().then((data) => {
            if (res.status === 200) {
                setApiResult(data)
            } else {
                setApiError(data);
            }
        })
        setLoading(false)
    }

    const getApiUrl = () => {
        if (window.location.protocol === "https:") {
            return "https://ec2-13-61-7-138.eu-north-1.compute.amazonaws.com/api/iban/validate"
        }
        return "http://ec2-13-61-7-138.eu-north-1.compute.amazonaws.com/api/iban/validate"
    }

    return (
        <>
            <Form
                control={control}
                action={getApiUrl()}
                method="post"
                headers={{ "Content-Type": "application/json" }}
                onSubmit={handleSubmit}
                onSuccess={(r) => handleResponse(r.response)}
                validateStatus={(status) => status >= 200}
                className="mt-2 items-center">
                <IbanInput register={register} errors={errors} />
                <SubmitButtonWithLoadingSpinner loading={loading} />
            </Form>
            {renderErrors(apiError)}
            {renderResults(apiResult)}
        </>
    )
}
