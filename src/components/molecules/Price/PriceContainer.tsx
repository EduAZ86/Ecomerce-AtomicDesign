import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { IPriceContainerProps } from "./types";

export const PriceContainer: FC<IPriceContainerProps> = ({ children }) => {
    return (
        <div
            className={twMerge(
                "w-full flex flex-row justify-center items-center gap-2"
            )}
        >
            {children}
        </div>
    )
}