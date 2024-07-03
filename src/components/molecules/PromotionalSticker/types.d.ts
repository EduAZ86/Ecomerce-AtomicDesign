import { TColors, TFontSize, THeight, TWidth } from "@/components/types/tailwindStyleTypes";
import { ReactNode } from "react";

type StickerPossition =
    | "left-top"
    | "right-top"
    | "left-bottom"
    | "right-bottom"
    | "center"
    | "bottom-center"
    | "top-center";

export interface IStickerContainerProps {
    possition: StickerPossition;
    children: ReactNode;
    backgroundColor: TColors;
    width: TWidth;
    mobileWidth?: TWidth;
    height: THeight;
    mobileHeight?: THeight;
}
export interface IPromotionalStickerProps extends Omit<IStickerContainerProps, "children"> {
    text: string;
    textColor: TColors;
    fontSize: TFontSize;
}
