import { IImageComponentProps } from "@/components/atoms/ImageComponent/types";
import { THeight, TRounded, TWidth } from "@/components/types/tailwindStyleTypes";

interface IStyles {
    height?: THeight;
    mobileHeight?: THeight;
    mobileWidth?: TWidth;
    width: TWidth;
    rounded?: TRounded;
}

export interface ICardImageProps {
    src: string;
    alt: string;
    styles: IStyles;
}