import { IBasicContainerProps } from "@/components/atoms/BasicContainer/types";
import { IImageComponentProps } from "@/components/atoms/ImageComponent/types";
import { ITypographyProps } from "@/components/atoms/Typography/types";

interface containerProps extends Pick<IBasicContainerProps, "children" | "styles"> { }
interface imageProps extends Pick<IImageComponentProps, "imageProps" | "styles"> { }
interface titleProps extends Pick<ITypographyProps, "styles"> {
    title: string;
}

export interface ICardHeaderProps {
    containerProps: containerProps;
    imageProps?: imageProps;
    titleProps?: titleProps;
}