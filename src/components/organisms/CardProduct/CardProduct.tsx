import { FC } from "react";
import { ICardProductProps } from "./types";
import { CardContainer, CardImage, Category, Price, PromotionalSticker, Title } from "@/components/molecules";



export const CardProduct: FC<ICardProductProps> = ({
    title,
    srcImage,
    altImage,
    category,
    discount,
    linkRef,
    price
}) => {
    return (
        <CardContainer
            linkRef={linkRef}
            backgroundColorStyle={{
                backgroundColor: "transparent",
                hoverBackgroundColor: "acent"
            }}
            containerStyle={{
                hoverBorderStyle: {
                    borderColor: "border-acent",
                    borderType: "border-solid",
                    borderWidth: "border-0"
                },
                styles: {

                }
            }}
        >
            <PromotionalSticker
                text=""
                textColor="background"
                backgroundColor="primary"
                fontSize="text-xl"
                possition="right-top"
            />
            <CardImage
                alt={altImage}
                src={srcImage}
                styles={{
                    height: "h-64",
                    mobileHeight: "h-56",
                    width: "w-48",
                    mobileWidth: "w-40",
                    rounded: "rounded-lg"
                }}
            />
            <Category
                text={category}
            />
            <Title
                text={title}
                variant="cardTitle"
            />
            <Price
                discount={discount}
                price={price}
                variant="cardPrice"
            />
        </CardContainer>
    )
} 