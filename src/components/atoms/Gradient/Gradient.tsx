import { FC } from "react"
import { IGradientProps } from "./types"
import { twMerge } from "tailwind-merge"
import { backgroundGradientAsign } from "@/theme/themeColors"

export const Gradient: FC<IGradientProps> = ({
    color1,
    color2,
    gradient,
    styles: {
        height,
        mobileHeight,
        width,
        mobileWidth,
        opacity,
        rounded,
        style
    },
    variant
}) => {
    return (
        <span
            className={twMerge(
                "w-full h-full",
                variant === "backgroundGradient" ? "absolute top-0 left-0 -z-10" : "relative",
                height && "md:" + height,
                width && "md:" + width,
                mobileHeight && mobileHeight,
                mobileWidth && mobileWidth,
                opacity && opacity,
                rounded && rounded,
                backgroundGradientAsign(color1, color2, gradient),
            )}
            style={style}
        />
    )
}