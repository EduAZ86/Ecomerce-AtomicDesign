import { ReactNode } from "react";
import { IBackgroundColorProps } from "../Background/types";
import { IBasicContainerProps } from "@/components/atoms/BasicContainer/types";

interface border {
    borderType: TBorder;
    borderWidth: TBorderWidth;
    borderColor: TBorderColor;
}

interface containerStyle extends Pick<IBasicContainerProps, "styles"> {
    hoverBorderStyle: border;
}

export interface ICardContainerProps {
    children: ReactNode;
    linkRef: string;
    backgroundColorStyle: IBackgroundColorProps;
    containerStyle: containerStyle;
}