import { Typography } from "@/components/atoms";
import { FC } from "react";
import { ITitleProps, ITitleVariantProps, TitleVariant } from "./types";

const titleSchema: TitleVariant = {
    mainTitle: (props: ITitleVariantProps) => {
        <Typography
            variant="h1"
            styles={{
                textColor: "acent"
            }}
        >
            {props.text}
        </Typography>
    },
    title: (props: ITitleVariantProps) => {
        <Typography
            variant="h2"
            styles={{
                textColor: "complementary"
            }}
        >
            {props.text}
        </Typography>
    },
    subTitle: (props: ITitleVariantProps) => {
        <Typography
            variant="h4"
            styles={{
                textColor: "complementary"
            }}
        >
            {props.text}
        </Typography>
    },
    categoryTitle: (props: ITitleVariantProps) => {
        <Typography
            variant="h3"
            styles={{
                textColor: "complementary"
            }}
        >
            {props.text}
        </Typography>
    },
    cardTitle: (props: ITitleVariantProps) => {
        <Typography
            variant="h5"
            styles={{
                textColor: "complementary"
            }}
            hoverStyles={{
                textColor: "primary"
            }}
        >
            {props.text}
        </Typography>
    }
}

export const Title: FC<ITitleProps> = ({ text, variant }) => {
    return titleSchema[variant](text)
}