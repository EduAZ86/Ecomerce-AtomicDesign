import { TAlign, TBorder, TBorderColor, TBorderWidth, TColors, TDirection, TGap, THeight, TJustify, TOpacity, TPadding, TRounded, TWidth } from "@/components/types/tailwindStyleTypes";
import { CSSProperties, ReactNode } from "react";

interface border {
    borderType: TBorder;
    borderWidth: TBorderWidth;
    borderColor: TBorderColor;
}

interface IStylesContainer {
    width?: TWidth;
    mobileWidth?: TWidth;
    height?: THeight;
    mobileHeight?: THeight;
    rounded?: TRounded;
    gap?: TGap;
    style?: CSSProperties;
    direction?: TDirection;
    mobileDirection?: TDirection;
    padding?: TPadding;
    justify?: TJustify;
    align?: TAlign;
    border?: border;
};

export interface IBasicContainerProps {
    children: ReactNode;
    styles: IStylesContainer;
    hoverStyle?: IStylesContainer;
};