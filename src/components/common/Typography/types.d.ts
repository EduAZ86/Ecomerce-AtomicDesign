import { TColors, TFontSize } from '@/types/tailwindStyleTypes';
import { CSSProperties, FC, PropsWithChildren } from 'react';


export interface ITypographyProps extends PropsWithChildren {
    variant: keyof TTypographyVariant;
    style?: CSSProperties;
    bold?: boolean;
    align?: 'text-center' | 'text-left' | 'text-right';
    textSize?: TFontSize;
    textColor?: TColors;
};

export type TTypographyVariant = {
    mainTitle: FC<ITypographyProps>;
    title: FC<ITypographyProps>;
    subTitle: FC<ITypographyProps>;
    cardTitle: FC<ITypographyProps>;
    altText: FC<ITypographyProps>;
    paragraph: FC<ITypographyProps>;
    error: FC<ITypographyProps>;
    textButton: FC<ITypographyProps>;
    label: FC<ITypographyProps>;
    price: FC<ITypographyProps>;
};