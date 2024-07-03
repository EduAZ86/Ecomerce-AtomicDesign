import { FC } from "react";
import { ICardListProps } from "./types";
import { BasicContainer } from "@/components/atoms";
import { Background } from "../Background/Background";

export const CardList: FC<ICardListProps> = ({
    items,
    renderItem
}) => {
    return (
        <BasicContainer
            styles={{
                direction: "flex-row",
                width: "w-full",
                gap: "gap-4",
                justify: "justify-center",
                align: "items-center",
                padding: "p-2"

            }}
        >
            <Background backgroundColor={{
                backgroundColor: "background"
            }} />
            {items?.map((item, index) => {
                return (
                    <div
                        key={index}
                    >
                        {renderItem(item)}
                    </div>)
            })}
        </BasicContainer>
    )
}