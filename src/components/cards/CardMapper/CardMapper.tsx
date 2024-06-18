import { FC } from "react";
import { ICardMapperProps } from "./types";
import { CardProduct } from "../CardProduct";

export const CardMapper: FC<ICardMapperProps> = ({
    products
}) => {
    return (
        <div
            className={`
                w-fit h-auto
                flex flex-row
                flex-wrap
                p-2 gap-2
                justify-center               
            `}
        >
            {products?.map((product, index) => {
                return (
                    <CardProduct
                        key={index}
                        {...product}
                    />
                )
            })}
        </div>
    )
}