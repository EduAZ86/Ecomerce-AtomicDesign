import { TBlur, TBrightness, TContrast, TDirection, TGap, THeight, TObjectFit, TRounded, TWidth } from "@/components/types/tailwindStyleTypes";

type TypeImage = "image" | "backgroundImage";

interface IFilter {
    blur?: TBlur;
    brightness?: TBrightness;
    contrast?: TContrast;
}

interface ImageStyle {
    width?: TWidth;
    mobileWidth?: TWidth;
    height?: THeight;
    mobileHeight?: THeight;
    rounded?: TRounded;
    opacity?: TOpacity;
    style?: CSSProperties;
    filters?: IFilter;
    objetctFit?: TObjectFit;
}

export interface IImageComponentProps {
    imageProps: React.ImgHTMLAttributes<HTMLImageElement>;
    styles: ImageStyle;
    hoverStyles?: ImageStyle;
    variant: TypeImage;
}