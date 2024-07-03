import { FC } from "react";
import { IStickerContainerProps } from "./types";
import { BasicContainer } from "@/components/atoms";
import { twMerge } from "tailwind-merge";
import { Background } from "../Background/Background";

export const StickerContainer: FC<IStickerContainerProps> = ({
    possition,
    backgroundColor,
    children
}) => {
    return (
        <div
            className={twMerge(
                "flex absolute w-fit h-fit z-10",
                possition === "left-top" && "top-0 left-0",
                possition === "right-top" && "top-0 right-0",
                possition === "left-bottom" && "left-0 bottom-0",
                possition === "right-bottom" && "right-0 bottom-0",
                possition === "center" && "left-1/2 top-1/2",
                possition === "bottom-center" && "left-1/2 bottom-0",
                possition === "top-center" && "top-0 left-1/2",
            )}
        >
            <BasicContainer
                styles={{
                    direction: "flex-row",
                    align: "items-center",
                    justify: "justify-center",
                    width: "w-fit",
                    height: "h-fit",
                    padding: "p-4",
                    rounded: "rounded-xl"
                }}
            >
                <Background
                    backgroundColor={{
                        backgroundColor
                    }}
                />
                {children}
            </BasicContainer>
        </div>
    )
}