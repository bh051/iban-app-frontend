import { InfoBoxProps } from "./types"

export function InfoBox(props: InfoBoxProps) {
    if (props.type === "success") {
        return (
            <div className={`p-3 bg-green-200 border-y-2 border-green-900 text-green-900`}>
                {props.children}
            </div>
        )
    }

    if (props.type === "error") {
        return (
            <div className={`p-3 bg-red-200 border-y-2 border-red-900 text-red-900`}>
                {props.children}
            </div>
        )
    }

    return (
        <div className={`p-3 bg-gray-200 border-y-2 border-gray-900 text-gray-900`}>
            {props.children}
        </div>
    )
}
