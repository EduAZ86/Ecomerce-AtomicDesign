import { FC } from "react"
import { IListProductsProps, IProduct } from "./types"
import { CardList } from "@/components/molecules"
import { CardProduct } from "../CardProduct/CardProduct"

export const ListProducts: FC<IListProductsProps> = ({
    products
}) => {
    return (
        <CardList
            items={products}
            renderItem={(product: IProduct) => (
                <CardProduct
                    {...product}
                />
            )}
        />
    )
}