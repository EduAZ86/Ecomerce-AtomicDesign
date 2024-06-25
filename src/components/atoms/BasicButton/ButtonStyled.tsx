import { FC } from "react";
import { IButtonStyledProps } from "./types";
import { twMerge } from "tailwind-merge";
import { backgroundColorAsign } from "@/theme/themeColors";

export const ButtonStyled: FC<IButtonStyledProps> = ({
    buttonProps,
    children,
    styles: {
        mobileHeight,
        height,
        width,
        mobileWidth,
        background,
        rounded,
        style,
        direction,
        mobileDirection
    },
    activeStyle,
    hoverStyle
}) => {
    return (
        <button
            {...buttonProps}
            style={style}
            className={twMerge(
                "flex relative md:flex-row flex-col group",
                height && "md:" + height,
                mobileHeight && mobileHeight,
                width && "md:" + width,
                mobileWidth && mobileWidth,
                rounded && rounded,
                direction && "md:" + direction,
                mobileDirection && mobileDirection,
                background && backgroundColorAsign(background),
                hoverStyle?.height && "hover:" + "md:" + height,
                hoverStyle?.mobileHeight && "hover:" + mobileHeight,
                hoverStyle?.width && "hover:" + "md:" + width,
                hoverStyle?.mobileWidth && "hover:" + mobileWidth,
                hoverStyle?.rounded && "hover:" + rounded,
                hoverStyle?.background && "hover:" + backgroundColorAsign(background, "hover:"),
                activeStyle?.height && "active:" + "md:" + height,
                activeStyle?.mobileHeight && "active:" + mobileHeight,
                activeStyle?.width && "active:" + "md:" + width,
                activeStyle?.mobileWidth && "active:" + mobileWidth,
                activeStyle?.rounded && "active:" + rounded,
                activeStyle?.background && "active:" + backgroundColorAsign(background, "active:"),
            )}
        >
            {children}
        </button>
    )
}