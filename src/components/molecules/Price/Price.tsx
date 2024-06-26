import { FC } from "react";
import { IPriceProps, IPriceVariantProps, PriceVariant } from "./types";
import { Typography } from "@/components/atoms";

const priceSchema: PriceVariant = {
    cardPrice: (props: IPriceVariantProps) => {
        <Typography>

        </Typography>
    },
    cartPrice: (props: IPriceVariantProps) => {
        <div>
            <Typography>
                {props.price}
            </Typography>
            <Typography>

            </Typography>
        </div>
    },
    cartTotalPrice: (props: IPriceVariantProps) => {
        <div>
            <Typography>
                {props.price}
            </Typography>
            <Typography>

            </Typography>
        </div>
    },
    DetailProductPrice: (props: IPriceVariantProps) => {
        <div>
            <Typography>
                {props.price}
            </Typography>
            <Typography>

            </Typography>
        </div>
    },
    offerPrice: (props: IPriceVariantProps) => {
        <div>
            <Typography>
                {props.price}
            </Typography>
            <Typography>

            </Typography>
        </div>
    }
}

export const Price: FC<IPriceProps> = ({
    variant,
    ...otherPriceProps
}) => {
    return priceSchema[variant](otherPriceProps)
}