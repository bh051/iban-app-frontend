import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { SubmitButtonProps } from "./types";

export function SubmitButtonWithLoadingSpinner(props: SubmitButtonProps) {
    return (
        props.loading
            ? <LoadingSpinner />
            : <button className="px-3 py-2 box-border my-2 bg-sky-500 rounded-md text-white grow-0 hover:bg-sky-700" type="submit">Validate</button>
    );
}