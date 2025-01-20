import { IbanInputProps } from "./types";

export function IbanInput(props: IbanInputProps) {
    return (
        <fieldset>
            <legend className="text-sm font-bold">IBAN</legend>
            <input {
                    ...props.register("iban", {
                        required: "IBAN required.",
                        minLength: { value: 14, message: "IBAN must contain at least 14 characters." },
                        maxLength: { value: 34, message: "IBAN must contain a maximum of 34 characters." },
                        setValueAs: (iban) => iban.replace(/(-|\s)/gi, "")
                    })
                }
                name="iban"
                type="text"
                className={`outline-none w-72 border-2 rounded-md p-2 mr-3 ${(props.errors?.iban ? "border-2 border-red-500 focus:border-red-500" : "border-slate-200")}`} />
            <div className="text-red-500 w-96 text-sm">{props.errors?.iban?.message?.toString()}</div>
        </fieldset>
    )
}