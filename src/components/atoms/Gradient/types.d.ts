import { TBackgroundGradient, TColors, THeight, TOpacity, TRounded, TWidth } from "@/components/types/tailwindStyleTypes";
import { CSSProperties } from "react";

type TypeGradient = "imageGradient" | "backgroundGradient";

interface GradientStyle {
    width?: TWidth;
    mobileWidth?: TWidth;
    height?: THeight;
    mobileHeight?: THeight;
    rounded?: TRounded;
    opacity?: TOpacity;
    style?: CSSProperties;
}

export interface IGradientProps {
    color1: TColors | string;
    color2: TColors | string;
    gradient: TBackgroundGradient;
    styles: GradientStyle;
    variant: TypeGradient;
}