import { TColors, TFontSize } from '@/components/types/tailwindStyleTypes';
import { CSSProperties, FC, PropsWithChildren } from 'react';

export interface ITypographyProps extends PropsWithChildren {
    variant: keyof TTypographyVariant;
    style?: CSSProperties;   
    align?: 'text-center' | 'text-left' | 'text-right';

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