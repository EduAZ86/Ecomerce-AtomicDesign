import { FC } from "react";
import { Typography } from "@/components/atoms";
import { PriceContainer } from "./PriceContainer";
import { priceFormatter } from "./priceFormatter";
import { IPriceProps, IPriceVariantProps, PriceVariant } from "./types";

const priceSchema: PriceVariant = {
    cardPrice: (props: IPriceVariantProps) => {
        <PriceContainer>
            <Typography
                variant="h5"
                styles={{
                    textColor: "secondary",
                    textDecoration: "line-through"
                }}
            >
                {props.regularPrice}
            </Typography>
            <Typography
                variant="h6"
                styles={{
                    textColor: "primary",

                }}
            >
                {props.priceWithDiscount}
            </Typography>
        </PriceContainer>
    },
    cartPrice: (props: IPriceVariantProps) => {
        <PriceContainer>
            <Typography
                variant="h5"
                styles={{
                    textColor: "primary"
                }}
            >
                {props.regularPrice}
            </Typography>
            <Typography
                variant="h5"
                styles={{
                    textColor: "primary"
                }}
            >
                {props.priceWithDiscount}
            </Typography>
        </PriceContainer>
    },
    cartTotalPrice: (props: IPriceVariantProps) => {
        <PriceContainer>
            <Typography
                variant="h5"
                styles={{
                    textColor: "primary"
                }}
            >
                {props.regularPrice}
            </Typography>
            <Typography
                variant="h5"
                styles={{
                    textColor: "primary"
                }}
            >
                {props.priceWithDiscount}
            </Typography>
        </PriceContainer>
    },
    DetailProductPrice: (props: IPriceVariantProps) => {
        <PriceContainer>
            <Typography
                variant="h5"
                styles={{
                    textColor: "primary"
                }}
            >
                {props.regularPrice}
            </Typography>
            <Typography
                variant="h5"
                styles={{
                    textColor: "primary"
                }}
            >
                {props.priceWithDiscount}
            </Typography>
        </PriceContainer>
    },
    offerPrice: (props: IPriceVariantProps) => {
        <PriceContainer>
            <Typography
                variant="h5"
                styles={{
                    textColor: "primary"
                }}
            >
                {props.regularPrice}
            </Typography>
            <Typography
                variant="h5"
                styles={{
                    textColor: "primary"
                }}
            >
                {props.priceWithDiscount}
            </Typography>
        </PriceContainer>
    }
}

export const Price: FC<IPriceProps> = ({
    variant,
    ...otherPriceProps
}) => {
    const regularPrice = priceFormatter(otherPriceProps.price);
    const priceWithDiscount = priceFormatter(otherPriceProps.price - otherPriceProps.price * otherPriceProps.discount);
    return priceSchema[variant]({ regularPrice, priceWithDiscount })
}