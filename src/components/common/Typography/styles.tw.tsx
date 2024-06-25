import { twMerge } from "tailwind-merge";
import { ITypographyProps } from "./types";
import { FC } from 'react'
import { textColorAsign } from "@/theme/themeColors";

export const MainTitle: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <h1
            className={
                twMerge(
                    "text-center m-0",
                    align,
                    bold ? 'font-bold' : 'font-light',
                    textSize ? textSize : "text-3xl md:text-4xl",
                    textColor && textColorAsign(textColor)
                )}
            style={style}
        >
            {children}
        </h1>
    );
};

export const Title: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <h2
            className={
                twMerge(
                    "text-center m-0",
                    align,
                    bold ? 'font-bold' : 'font-light',
                    textSize ? textSize : 'text-2xl md:text-3xl',
                    textColor && textColorAsign(textColor)
                )}
            style={style}
        >
            {children}
        </h2>
    );
};

export const SubTitle: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <h2
            className={
                twMerge(
                    "text-center m-0",
                    align,
                    bold ? 'font-bold' : 'font-light',
                    textSize ? textSize : 'text-xl md:text-2xl',
                    textColor && textColorAsign(textColor)
                )}
            style={style}
        >
            {children}
        </h2>
    );
};

export const CardTitle: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <h3
            className={
                twMerge(
                    "text-center m-0",
                    align,
                    bold ? 'font-bold' : 'font-light',
                    textSize ? textSize : 'text-xl md:text-2xl',
                    textColor && textColorAsign(textColor)
                )}
            style={style}
        >
            {children}
        </h3>
    );
};


export const Paragraph: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textSize, textColor, style }) => {
    return (
        <p
            className={
                twMerge(
                    "text-center m-0",
                    align,
                    bold ? 'font-bold' : 'font-light',
                    textSize ? textSize : 'text-sm',
                    textColor && textColorAsign(textColor)
                )}
            style={style}
        >
            {children}
        </p>
    );
};

export const TextError: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <span
            className={
                twMerge(
                    "text-center m-0",
                    align,
                    bold ? 'font-bold' : 'font-light',
                    textSize ? textSize : 'text-sm',
                    textColor ? textColorAsign(textColor) : "text-red-700 dark:text-red-400"
                )}
            style={style}
        >
            {children}
        </span>
    );
};

export const TextButton: FC<ITypographyProps> = ({ align = 'text-left', children, textColor, textSize, style, bold }) => {
    return (
        <span
            className={
                twMerge(
                    "text-center m-0",
                    "group-hover:text-light-secondary group-hover:dark:text-dark-secondary",
                    align,
                    bold ? 'font-bold' : 'font-light',
                    textSize ? textSize : 'text-sm',
                    textColor && textColorAsign(textColor)
                )}
            style={style}
        >
            {children}
        </span>
    );
};

export const Label: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <span
            className={
                twMerge(
                    "text-center m-0",
                    align,
                    bold ? 'font-bold' : 'font-light',
                    textSize ? textSize : 'text-sm',
                    textColor && textColorAsign(textColor)
                )}
            style={style}
        >
            {children}
        </span>
    );
};
export const Price: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <span
            className={
                twMerge(
                    "text-center m-0 tracking-wide",
                    align,
                    bold ? 'font-bold' : 'font-light',
                    textSize ? textSize : 'text-sm',
                    textColor && textColorAsign(textColor)
                )}
            style={style}
        >
            {children}
        </span>
    );
};
export const AltText: FC<ITypographyProps> = ({ align = 'text-left', bold = false, children, textColor, textSize, style }) => {
    return (
        <span
            className={
                twMerge(
                    "text-center m-0",
                    align,
                    bold ? 'font-bold' : 'font-light',
                    textSize ? textSize : 'text-xs',
                    textColor && textColorAsign(textColor)
                )}
            style={style}
        >
            {children}
        </span>
    );
};