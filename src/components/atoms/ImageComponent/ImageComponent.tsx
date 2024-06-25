import { FC } from "react";
import { IImageComponentProps } from "./types";
import { twMerge } from "tailwind-merge";

export const ImageComponent: FC<IImageComponentProps> = ({
    imageProps,
    variant,
    hoverStyles,
    styles: {
        width,
        mobileWidth,
        height,
        mobileHeight,
        opacity,
        rounded,
        filters,
        objetctFit,
        style
    },
}) => {
    return (
        <img
            {...imageProps}
            className={twMerge(
                " w-full h-full overflow-hidden",
                variant === "backgroundImage" ? "absolute top-0 left-0 -z-10" : "relative",
                height && "md:" + height,
                width && "md:" + width,
                mobileHeight && mobileHeight,
                mobileWidth && mobileWidth,
                opacity && opacity,
                rounded && rounded,
                objetctFit && objetctFit,
                filters?.blur && filters.blur,
                filters?.brightness && filters.brightness,
                filters?.contrast && filters.contrast,
                hoverStyles?.height && "hover:md:" + hoverStyles.height,
                hoverStyles?.width && "hover:md:" + hoverStyles.width,
                hoverStyles?.mobileHeight && "hover:" + hoverStyles.mobileHeight,
                hoverStyles?.mobileWidth && "hover:" + hoverStyles.mobileWidth,
                hoverStyles?.opacity && "hover:" + hoverStyles.opacity,
                hoverStyles?.rounded && "hover:" + hoverStyles.rounded,
                hoverStyles?.filters?.blur && "hover:" + hoverStyles.filters.blur,
                hoverStyles?.filters?.brightness && "hover:" + hoverStyles.filters.brightness,
                hoverStyles?.filters?.contrast && "hover:" + hoverStyles.filters.contrast,
            )}
            style={style}
        />
    )
}