import { FC } from "react";
import Link from "next/link";
import { ICardContainerProps } from "./types";
import { BasicContainer } from "@/components/atoms";
import { Background } from "../Background/Background";

export const CardContainer: FC<ICardContainerProps> = ({
    children,
    linkRef,
    containerStyle,
    backgroundColorStyle: {
        backgroundColor,
        hoverBackgroundColor
    }
}) => {
    return (
        <BasicContainer
            styles={containerStyle.styles}
            hoverStyle={{
                border: containerStyle.hoverBorderStyle
            }}
        >
            <Background
                backgroundColor={{
                    backgroundColor: backgroundColor,
                    hoverBackgroundColor: hoverBackgroundColor
                }}
            />
            <Link
                href={linkRef}
            >
                {children}
            </Link>
        </BasicContainer>
    )
}