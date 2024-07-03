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
                hoverStyle?.height && "hover:" + "md:" + hoverStyle.height,
                hoverStyle?.mobileHeight && "hover:" + hoverStyle.mobileHeight,
                hoverStyle?.width && "hover:" + "md:" + hoverStyle.width,
                hoverStyle?.mobileWidth && "hover:" + hoverStyle.mobileWidth,
                hoverStyle?.rounded && "hover:" + hoverStyle.rounded,
                hoverStyle?.background && "hover:" + backgroundColorAsign(hoverStyle.background, "hover:"),
                activeStyle?.height && "active:" + "md:" + activeStyle.height,
                activeStyle?.mobileHeight && "active:" + activeStyle.mobileHeight,
                activeStyle?.width && "active:" + "md:" + activeStyle.width,
                activeStyle?.mobileWidth && "active:" + activeStyle.mobileWidth,
                activeStyle?.rounded && "active:" + activeStyle.rounded,
                activeStyle?.background && "active:" + backgroundColorAsign(activeStyle.background, "active:"),
                activeStyle?.activePress && "active:" + activeStyle.activePress
            )}
        >
            {children}
        </button>
    )
}