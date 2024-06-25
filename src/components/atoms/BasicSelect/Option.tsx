import { FC } from "react";
import { IOptionProps } from "./types";
import { twMerge } from "tailwind-merge";
import { backgroundColorAsign } from "@/theme/themeColors";

export const Option: FC<IOptionProps> = ({
    option,
    background,
    backgroundHover,
    direction
}) => {
    return (
        <option
            className={twMerge(
                "w-full h-fit bg-transparent relative flex",
                direction && direction,
                background && backgroundColorAsign(background),
                backgroundHover && backgroundColorAsign(backgroundHover, "hover:")
            )}
        >
            {option}
        </option>
    )
}