import { Typography } from "@/components/atoms";
import { FC } from "react";
import { IPromotionalStickerProps } from "./types";
import { StickerContainer } from "./StickerContainer";

export const PromotionalSticker: FC<IPromotionalStickerProps> = ({
    text,
    textColor,
    fontSize,
    ...containerProps

}) => {
    return (
        <StickerContainer
            {...containerProps}
        >
            <Typography
                variant="h4"
                styles={{
                    textColor,
                    textSize: fontSize
                }}
            >
                {text}
            </Typography>
        </StickerContainer>
    )
}