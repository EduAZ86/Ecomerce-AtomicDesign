import { FC } from "react";
import { ICategoryProps } from "./types";
import { Typography } from "@/components/atoms";

export const Category: FC<ICategoryProps> = ({ text }) => {
    return (
        <Typography
            variant="h4"
            styles={{
                textColor: "complementary",
                letterSpacing: "tracking-wide",
                weight: "font-semibold",
                textSize: "text-2xl"

            }}
        >
            {text.toUpperCase()}
        </Typography>
    )
}