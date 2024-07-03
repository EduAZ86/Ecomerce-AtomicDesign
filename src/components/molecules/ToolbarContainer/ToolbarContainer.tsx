import { FC } from "react";
import { IToolbarContainerProps } from "./types";
import { BasicContainer } from "@/components/atoms";
import { Background } from "../Background/Background";

export const ToolbarContainer: FC<IToolbarContainerProps> = ({ children }) => {
    return (
        <BasicContainer
            styles={{
                direction: "flex-row",
                width: "w-full",
                align: "items-center",
                justify: "justify-evenly",
                padding: "p-4",
            }}
        >
            <Background
                backgroundColor={{
                    backgroundColor: "secondary"
                }}
            />
            {children}
        </BasicContainer>
    )
}