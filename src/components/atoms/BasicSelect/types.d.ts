import React, { CSSProperties, ReactNode } from "react";
import { ITypographyStyles } from "../Typography/types";
import { TColors, TDirection, TGap, THeight, TRounded, TWidth } from "@/components/types/tailwindStyleTypes";

interface IStyledSelect {
    width?: TWidth;
    mobileWidth?: TWidth;
    height?: THeight;
    mobileHeight?: THeight;
    background: TColors;
    rounded?: TRounded;
    gap?: TGap;
    style?: CSSProperties;
};

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children" | "style"> {
};

export interface IStyledSelectProps {
    styles: IStyledSelect;
    selectProps: SelectProps;
    children: ReactNode;
};

interface IOption {
    content?: ReactNode;
    value: string | number;
    disabled?: boolean;
}

export interface IOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
    option: ReactNode;
    background: TColors;
    backgroundHover: TColors;
    direction: TDirection;
}

interface IOptionStyle extends Pick<IOptionProps, "background" | "backgroundHover" | "direction"> { }
export interface IBasicSelectProps extends Omit<IStyledSelectProps, "children"> {
    options: IOption[];
    optionStyle: IOptionStyle;
    placeholder: string;
    placeholderStyle: ITypographyStyles;
};