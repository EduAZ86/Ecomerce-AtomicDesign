import { ICardData } from "@/components/types/cardProduct.data";

export interface ICardProductProps extends ICardData {

}

export interface IPriceProps {
    price: number;
    discount?: number;
}