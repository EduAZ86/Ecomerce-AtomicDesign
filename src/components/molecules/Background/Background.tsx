import { Gradient, ImageComponent } from "@/components/atoms";
import { FC } from "react";
import { IBackgroundProps } from "./types";
import { BackgroundColor } from "./BackgroundColor";

export const Background: FC<IBackgroundProps> = ({
    backgroundColor,
    backgroundGradient,
    backgroundImage
}) => {
    return (
        <>
            {backgroundImage &&
                <ImageComponent
                    variant="backgroundImage"
                    {...backgroundImage}
                />}
            {backgroundGradient &&
                <Gradient
                    variant="backgroundGradient"
                    {...backgroundGradient}
                />
            }
            {
                backgroundColor &&
                <BackgroundColor
                    {...backgroundColor}
                />
            }
        </>
    )
}