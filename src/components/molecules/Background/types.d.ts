import { IGradientProps } from "@/components/atoms/Gradient/types";
import { IImageComponentProps } from "@/components/atoms/ImageComponent/types";

type backgroundType = "backgroundImage" | "backgroundColor" | "backgroundGradient";

interface backgroundImage extends Omit<IImageComponentProps, "variant"> { }

interface backgroundGradient extends Omit<IGradientProps, "variant"> { }

interface IBackgroundColorProps {
    backgroundColor: TColors;
    hoverBackgroundColor?: TColors;
    opacity?: TOpacity;
}

export interface IBackgroundProps {
    backgroundImage?: backgroundImage;
    backgroundGradient?: backgroundGradient;
    backgroundColor?: IBackgroundColorProps;
}