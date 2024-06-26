export type PriceVariant = {
    cardPrice: FC<IPriceVariantProps>;
    DetailProductPrice: FC<IPriceVariantProps>;
    cartTotalPrice: FC<IPriceVariantProps>;
    cartPrice: FC<IPriceVariantProps>;
    offerPrice: FC<IPriceVariantProps>;
};

export interface IPriceVariantProps extends Omit<IPriceProps, "variant"> { };

export interface IPriceProps {
    variant: keyof PriceVariant;
    price: number;
    discount: number;
}