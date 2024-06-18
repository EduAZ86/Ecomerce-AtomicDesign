import { FC } from "react"
import { ICardProductProps } from "./types"
import { Typography } from "@/components/common/Typography"
import { Price } from "./Price"

export const CardProduct: FC<ICardProductProps> = ({
    discount,
    id,
    image,
    price,
    productType,
    title
}) => {
    return (
        <div
            className={`
            w-64 h-96
            flex flex-col
            bg-light-background
            justify-between
            p-2
            overflow-hidden
        `}
        >
            <img
                alt='image'
                src={image}
            />
            <div
                className={`
                    w-full
                    flex flex-col
                    items-start
                    justify-start
                    gap-2
                `}
            >
                <Typography
                    key='ProductType'
                    variant="label"
                    textSize="text-xl"
                    textColor="complementary"
                >
                    {productType}
                </Typography>
                <Typography
                    key='Title'
                    variant="cardTitle"
                    bold
                    textColor="complementary"
                >
                    {title}
                </Typography>
                <Price
                    price={price}
                    discount={discount}
                />
            </div>
        </div>
    )
}