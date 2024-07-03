import { TColors, TDirection, TDisplay, THeight, TRounded, TScale, TWidth } from "@/components/types/tailwindStyleTypes";
import React, { CSSProperties, ReactNode } from "react";

interface IStyleButton {
    width?: TWidth;
    mobileWidth?: TWidth;
    height?: THeight;
    mobileHeight?: THeight;
    background: TColors;
    rounded?: TRounded;
    style?: CSSProperties;
    direction?: TDirection;
    mobileDirection?: TDirection;
}

interface IActiveStyle extends IStyleButton {
    activePress: TScale;
}

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "style"> { }

export interface IButtonStyledProps {
    buttonProps: ButtonProps;
    children: ReactNode;
    styles: IStyleButton;
    hoverStyle?: IStyleButton;
    activeStyle?: IActiveStyle;
}

export interface IBasicButtonProps extends IButtonStyledProps {
    loading?: boolean;
}