import { FC } from "react";
import { IStyledSelectProps } from "./types";
import { twMerge } from "tailwind-merge";
import { backgroundColorAsign } from "@/theme/themeColors";

export const SelectStyled: FC<IStyledSelectProps> = ({
    children,
    selectProps,
    styles: {
        background,
        height,
        mobileHeight,
        mobileWidth,
        rounded,
        style,
        width
    }
}) => {
    return (
        <select
            {...selectProps}
            style={style}
            className={twMerge(
                "w-fit h-fit px-1 py-2 text-sm font-bold flex flex-col",
                height && "md:" + height,
                mobileHeight && mobileHeight,
                width && "md:" + width,
                mobileWidth && mobileWidth,
                rounded && rounded,
                background && backgroundColorAsign(background),
            )}
        >
            {children}
        </select>
    )
}