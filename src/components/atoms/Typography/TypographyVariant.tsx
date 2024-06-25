import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { ITypographyVariantProps } from "./types";
import { textColorAsign } from "@/theme/themeColors";

const TypographyH1: FC<ITypographyVariantProps> = ({
    styles: {
        textColor,
        letterSpacing,
        style,
        textAlign,
        textDecoration,
        textSize,
        verticalAlign,
        weight
    },
    children
}) => {
    return (
        <h1
            className={twMerge(
                "font-montserrat text-4xl tracking-wide",
                textColor && textColorAsign(textColor),
                letterSpacing && letterSpacing,
                style && style,
                textAlign && textAlign,
                textDecoration && textDecoration,
                textSize && textSize,
                verticalAlign && verticalAlign,
                weight && weight
            )}
        >
            {children}
        </h1>
    )
}

const TypographyH2: FC<ITypographyVariantProps> = ({
    styles: {
        textColor,
        letterSpacing,
        style,
        textAlign,
        textDecoration,
        textSize,
        verticalAlign,
        weight
    },
    children
}) => {
    return (
        <h2
            className={twMerge(
                "font-montserrat text-2xl tracking-normal",
                textColor && textColorAsign(textColor),
                letterSpacing && letterSpacing,
                style && style,
                textAlign && textAlign,
                textDecoration && textDecoration,
                textSize && textSize,
                verticalAlign && verticalAlign,
                weight && weight
            )}
        >
            {children}
        </h2>
    )
}

const TypographyH3: FC<ITypographyVariantProps> = ({
    styles: {
        textColor,
        letterSpacing,
        style,
        textAlign,
        textDecoration,
        textSize,
        verticalAlign,
        weight
    },
    children
}) => {
    return (
        <h3
            className={twMerge(
                "font-montserrat text-xl",
                textColor && textColorAsign(textColor),
                letterSpacing && letterSpacing,
                style && style,
                textAlign && textAlign,
                textDecoration && textDecoration,
                textSize && textSize,
                verticalAlign && verticalAlign,
                weight && weight
            )}
        >
            {children}
        </h3>
    )
}
const TypographyH4: FC<ITypographyVariantProps> = ({
    styles: {
        textColor,
        letterSpacing,
        style,
        textAlign,
        textDecoration,
        textSize,
        verticalAlign,
        weight
    },
    children
}) => {
    return (
        <h4
            className={twMerge(
                "font-montserrat text-lg",
                textColor && textColorAsign(textColor),
                letterSpacing && letterSpacing,
                style && style,
                textAlign && textAlign,
                textDecoration && textDecoration,
                textSize && textSize,
                verticalAlign && verticalAlign,
                weight && weight
            )}
        >
            {children}
        </h4>
    )
}
const TypographyH5: FC<ITypographyVariantProps> = ({
    styles: {
        textColor,
        letterSpacing,
        style,
        textAlign,
        textDecoration,
        textSize,
        verticalAlign,
        weight
    },
    children
}) => {
    return (
        <h5
            className={twMerge(
                "font-montserrat text-sm",
                textColor && textColorAsign(textColor),
                letterSpacing && letterSpacing,
                style && style,
                textAlign && textAlign,
                textDecoration && textDecoration,
                textSize && textSize,
                verticalAlign && verticalAlign,
                weight && weight
            )}
        >
            {children}
        </h5>
    )
}
const TypographyH6: FC<ITypographyVariantProps> = ({
    styles: {
        textColor,
        letterSpacing,
        style,
        textAlign,
        textDecoration,
        textSize,
        verticalAlign,
        weight
    },
    children
}) => {
    return (
        <h6
            className={twMerge(
                "font-montserrat text-xs",
                textColor && textColorAsign(textColor),
                letterSpacing && letterSpacing,
                style && style,
                textAlign && textAlign,
                textDecoration && textDecoration,
                textSize && textSize,
                verticalAlign && verticalAlign,
                weight && weight
            )}
        >
            {children}
        </h6>
    )
}

const TypographyBody: FC<ITypographyVariantProps> = ({
    styles: {
        textColor,
        letterSpacing,
        style,
        textAlign,
        textDecoration,
        textSize,
        verticalAlign,
        weight
    },
    children
}) => {
    return (
        <p
            className={twMerge(
                "font-montserrat text-sm font-light text-justify",
                textColor && textColorAsign(textColor),
                letterSpacing && letterSpacing,
                style && style,
                textAlign && textAlign,
                textDecoration && textDecoration,
                textSize && textSize,
                verticalAlign && verticalAlign,
                weight && weight
            )}
        >
            {children}
        </p>
    )
}

const TypographyLabel: FC<ITypographyVariantProps> = ({
    styles: {
        textColor,
        letterSpacing,
        style,
        textAlign,
        textDecoration,
        textSize,
        verticalAlign,
        weight
    },
    labelProps,
    children
}) => {
    return (
        <label
            id={labelProps?.id}
            title={labelProps?.title}
            htmlFor={labelProps?.for}
            className={twMerge(
                "font-montserrat text-4xl",
                textColor && textColorAsign(textColor),
                letterSpacing && letterSpacing,
                style && style,
                textAlign && textAlign,
                textDecoration && textDecoration,
                textSize && textSize,
                verticalAlign && verticalAlign,
                weight && weight
            )}
        >
            {children}
        </label>
    )
}

const TypographyLegend: FC<ITypographyVariantProps> = ({
    styles: {
        textColor,
        letterSpacing,
        style,
        textAlign,
        textDecoration,
        textSize,
        verticalAlign,
        weight
    },
    children,
    hoverStyles,
    activeStyles
}) => {
    return (
        <span
            className={twMerge(
                "font-montserrat text-sm text-center",
                textColor && textColorAsign(textColor),
                letterSpacing && letterSpacing,
                style && style,
                textAlign && textAlign,
                textDecoration && textDecoration,
                textSize && textSize,
                verticalAlign && verticalAlign,
                weight && weight,
                hoverStyles?.textColor && "group-hover:" + textColorAsign(textColor),
                hoverStyles?.letterSpacing && "group-hover:" + letterSpacing,
                hoverStyles?.style && "group-hover:" + style,
                hoverStyles?.textAlign && "group-hover:" + textAlign,
                hoverStyles?.textDecoration && "group-hover:" + textDecoration,
                hoverStyles?.textSize && "group-hover:" + textSize,
                hoverStyles?.verticalAlign && "group-hover:" + verticalAlign,
                hoverStyles?.weight && "group-hover:" + weight,
                activeStyles?.textColor && "group-active:" + textColorAsign(textColor),
                activeStyles?.letterSpacing && "group-active:" + letterSpacing,
                activeStyles?.style && "group-active:" + style,
                activeStyles?.textAlign && "group-active:" + textAlign,
                activeStyles?.textDecoration && "group-active:" + textDecoration,
                activeStyles?.textSize && "group-active:" + textSize,
                activeStyles?.verticalAlign && "group-active:" + verticalAlign,
                activeStyles?.weight && "group-active:" + weight,
            )}
        >
            {children}
        </span>
    )
}

export {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyH4,
    TypographyH5,
    TypographyH6,
    TypographyBody,
    TypographyLabel,
    TypographyLegend
}