import { FC } from "react";
import { ICardImageProps } from "./types";
import { ImageComponent } from "@/components/atoms";

export const CardImage: FC<ICardImageProps> = ({
    alt,
    src,
    styles: {
        height,
        mobileHeight,
        mobileWidth,
        width,
        rounded
    }
}) => {
    return (
        <ImageComponent
            imageProps={{ src, alt }}
            styles={{
                height,
                mobileHeight,
                mobileWidth,
                width,
                objetctFit: "object-cover",
                rounded
            }}
            variant="image"
        />
    )
}