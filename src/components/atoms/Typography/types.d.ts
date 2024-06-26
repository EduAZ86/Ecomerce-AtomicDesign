import { TColors, TFontSize, TFontWeight, TLetterSpacing, TTextAlign, TTextDecoration, TTextVerticalAlign } from "@/components/types/tailwindStyleTypes";
import { PropsWithChildren } from "react";

export type TypographyVariant = {
    h1: FC<ITypographyProps>;
    h2: FC<ITypographyProps>;
    h3: FC<ITypographyProps>;
    h4: FC<ITypographyProps>;
    h5: FC<ITypographyProps>;
    h6: FC<ITypographyProps>;
    label: FC<ITypographyProps>;
    body: FC<ITypographyProps>;
    legend: FC<ITypographyProps>;
};

export interface ITypographyStyles {
    textColor: TColors;
    textSize?: TFontSize;
    weight?: TFontWeight;
    textAlign?: TTextAlign;
    textDecoration?: TTextDecoration;
    verticalAlign?: TTextVerticalAlign;
    letterSpacing?: TLetterSpacing;
    style?: CSSProperties;
}

interface ILabelProps {
    for: string;
    title: string;
    id: string;
}

export interface ITypographyProps extends PropsWithChildren {
    variant: keyof TypographyVariant;
    styles: ITypographyStyles;
    hoverStyles?: ITypographyStyles;
    activeStyles?: ITypographyStyles;
    labelProps?: ILabelProps;
}

export interface ITypographyVariantProps extends Omit<ITypographyProps, "variant"> { }