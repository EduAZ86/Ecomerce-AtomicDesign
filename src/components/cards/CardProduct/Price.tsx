import { FC } from "react";
import { IPriceProps } from "./types";
import { Typography } from "@/components/common/Typography";
import { priceFormatter } from "./priceFormatter";

export const Price: FC<IPriceProps> = ({ price, discount = 0 }) => {
    const promotionalPrice = price - price * discount;

    const discountFormat = (discount * 100).toString().includes('.')
        ? (discount * 100).toString().split('.')[0]
        : (discount * 100).toString();

    return (
        <div
            className={`
                w-full
                flex flex-row
                gap-3
                justify-start
                items-center
                relative
            `}
        >
            <Typography
                key='Price'
                variant="price"
                textColor="complementary"
                bold
                style={{
                    textDecoration: `${discount !== 0 ? "line-through" : ''}`,
                    opacity: `${discount !== 0 ? '50%' : '100%'}`
                }}
            >
                $ {priceFormatter(price)}
            </Typography>
            {discount !== 0 && <Typography
                key='PromotionalPrice'
                variant="price"
                textColor="primary"
                textSize="text-base"                
                bold
            >
                $ {priceFormatter(promotionalPrice)}
            </Typography>}
            {discount !== 0 &&
                <span
                    className={
                        `
                    w-fit h-fit
                    relative
                    bg-light-complementary
                    px-1
                    rounded-md
                    `
                    }
                >
                    <Typography
                        key='discount'
                        variant="price"
                        textColor="background"
                        textSize="text-xs"
                        bold                      
                    >
                        - {discountFormat}%
                    </Typography>
                </span>
            }
        </div>
    )
}