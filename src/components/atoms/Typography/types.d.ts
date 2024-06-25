import { TColors, TFontSize, TFontWeight, TLetterSpacing, TTextAlign, TTextDecoration, TTextVerticalAlign } from "@/components/types/tailwindStyleTypes";
import { PropsWithChildren } from "react";

export type TypographyVariant = {
    h1: FC<TTypography>;
    h2: FC<TTypography>;
    h3: FC<TTypography>;
    h4: FC<TTypography>;
    h5: FC<TTypography>;
    h6: FC<TTypography>;
    label: FC<TTypography>;
    body: FC<TTypography>;
    legend: FC<TTypography>;
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