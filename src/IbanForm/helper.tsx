import { InfoBox } from "../InfoBox/InfoBox";
import { ErrorResponse, IbanResponse, BankDataResponse } from "./types";

export const renderErrors = (error: ErrorResponse | null) => {
    if (!error) {
        return;
    }
    return (
        <InfoBox type="error">
            {error.error}
        </InfoBox>
    )
}

export const renderResults = (ibanResult: IbanResponse | null) => {
    if (!ibanResult) {
        return;
    }
    return ibanResult?.valid ? (
        <InfoBox type="success">
            <p>{ibanResult.iban} is a valid IBAN.</p>
            <br />
            {renderBankData(ibanResult.bank)}
        </InfoBox>

    ) : (
        <InfoBox type="info">
            <p className="text-red-500">{ibanResult.iban} is not a valid IBAN.</p>
            <br />
            {renderBankData(ibanResult.bank)}
        </InfoBox>
    )
}

const renderBankData = (bankData: BankDataResponse | null) => {
    if (!bankData) return ("No bank data available.")
    return (
        <>
            <p><b>Bank code:</b> {bankData?.bankCode}</p>
            <p><b>BIC</b>: {bankData?.bic}</p>
            <p><b>Bank:</b> {bankData?.name ?? `${bankData?.name}, ${bankData?.zip} ${bankData?.city}`}</p>
        </>
    );
}