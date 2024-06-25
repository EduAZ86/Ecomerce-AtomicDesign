import { BasicContainer, ImageComponent, Typography } from "@/components/atoms";
import { FC } from "react";
import { ICardHeaderProps } from "./types";

export const CardHeader: FC<ICardHeaderProps> = ({
    containerProps,
    imageProps,
    titleProps
}) => {
    return (
        <BasicContainer

            styles={{
                direction: containerProps.styles.direction
            }}

        >
            {imageProps && <ImageComponent
                imageProps={imageProps.imageProps}
                variant="image"
                styles={imageProps.styles}
            />}
            {titleProps && <Typography
                variant="h4"
                styles={titleProps.styles}
            >
                {titleProps.title}
            </Typography>}
        </BasicContainer>
    )
}