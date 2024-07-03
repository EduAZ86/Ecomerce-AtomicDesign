import { ReactNode } from "react";

export type PriceVariant = {
    cardPrice: FC<IPriceVariantProps>;
    DetailProductPrice: FC<IPriceVariantProps>;
    cartTotalPrice: FC<IPriceVariantProps>;
    cartPrice: FC<IPriceVariantProps>;
    offerPrice: FC<IPriceVariantProps>;
};

export interface IPriceVariantProps {
    regularPrice: string;
    priceWithDiscount: string;
};

export interface IPriceProps {
    variant: keyof PriceVariant;
    price: number;
    discount: number;
}

export interface IPriceContainerProps {
    children: ReactNode;
}