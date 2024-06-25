import { FC } from "react"
import { IBasicContainerProps } from "./types"
import { twMerge } from "tailwind-merge"
import { backgroundColorAsign } from "@/theme/themeColors"

export const BasicContainer: FC<IBasicContainerProps> = ({
    children,
    hoverStyle,
    styles: {
        direction,
        mobileDirection,
        gap,
        height,
        mobileHeight,
        mobileWidth,
        padding,
        rounded,
        width,
        style,
        align,
        border,
        justify
    }
}) => {
    return (
        <div
            style={style}
            className={twMerge(
                "flex relative bg-transparent group",
                height && "md:" + height,
                mobileHeight && mobileHeight,
                width && "md:" + width,
                mobileWidth && mobileWidth,
                rounded && rounded,
                gap && gap,
                padding && padding,
                border && border.borderColor + border.borderType + border.borderWidth,
                direction && "md:" + direction,
                align && align,
                justify && justify,
                mobileDirection && mobileDirection,
                hoverStyle?.height && "hover:" + "md:" + height,
                hoverStyle?.mobileHeight && "hover:" + mobileHeight,
                hoverStyle?.width && "hover:" + "md:" + width,
                hoverStyle?.mobileWidth && "hover:" + mobileWidth,
                hoverStyle?.rounded && "hover:" + rounded,
                hoverStyle?.gap && "hover:" + gap,
                hoverStyle?.padding && "hover:" + padding,
                hoverStyle?.border && hoverStyle.border.borderColor + hoverStyle.border.borderType + hoverStyle.border.borderWidth,
            )}
        >
            {children}
        </div>
    )
}