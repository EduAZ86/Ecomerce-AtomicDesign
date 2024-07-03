export interface IProduct {
    linkRef: string;
    srcImage: string;
    altImage: string;
    category: string;
    price: number;
    discount: number;
    title: string;
}

export interface IListProductsProps {
    products: IProduct[]
}