import { FC } from "react";
import { IPriceProps, IPriceVariantProps, PriceVariant } from "./types";
import { Typography } from "@/components/atoms";
import { PriceContainer } from "./PriceContainer";

const priceSchema: PriceVariant = {
    cardPrice: (props: IPriceVariantProps) => {
        <PriceContainer>
            <Typography
                variant="h5"
                styles={{
                    textColor: "primary"
                }}
            >
                {props.price}
            </Typography>
            <Typography
                variant="h5"
                styles={{
                    textColor: "primary"
                }}
            >
                {props.price}
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
                {props.price}
            </Typography>
            <Typography
                variant="h5"
                styles={{
                    textColor: "primary"
                }}
            >
                {props.price}
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
                {props.price}
            </Typography>
            <Typography
                variant="h5"
                styles={{
                    textColor: "primary"
                }}
            >
                {props.price}
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
                {props.price}
            </Typography>
            <Typography
                variant="h5"
                styles={{
                    textColor: "primary"
                }}
            >
                {props.price}
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
                {props.price}
            </Typography>
            <Typography
                variant="h5"
                styles={{
                    textColor: "primary"
                }}
            >
                {props.price}
            </Typography>
        </PriceContainer>
    }
}

export const Price: FC<IPriceProps> = ({
    variant,
    ...otherPriceProps
}) => {
    return priceSchema[variant](otherPriceProps)
}