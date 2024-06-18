import { ICardData } from "@/types/cardProduct.data";

export interface ICardProductProps extends ICardData {

}

export interface IPriceProps {
    price: number;
    discount?: number;
}