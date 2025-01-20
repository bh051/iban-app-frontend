import { ReactNode } from "react";

export interface InfoBoxProps {
    children: ReactNode;
    type: "info" | "error" | "success"
}