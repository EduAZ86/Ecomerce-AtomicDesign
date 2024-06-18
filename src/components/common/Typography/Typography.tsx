import { FC } from "react";
import { ITypographyProps, TTypographyVariant } from "./types";
import { AltText, TextError, Price, MainTitle, Paragraph, Title, TextButton, Label, SubTitle, CardTitle } from "./styles.tw";

const TypographySchema: TTypographyVariant = {
    mainTitle: (props: ITypographyProps) => (
        <MainTitle {...props}>{props.children}</MainTitle>
    ),
    title: (props: ITypographyProps) => (
        <Title {...props}>{props.children}</Title>
    ),
    subTitle: (props: ITypographyProps) => (
        <SubTitle {...props}>{props.children}</SubTitle>
    ),
    cardTitle: (props: ITypographyProps) => (
        <CardTitle {...props}>{props.children}</CardTitle>
    ),
    altText: (props: ITypographyProps) => (
        <AltText {...props}>{props.children}</AltText>
    ),
    paragraph: (props: ITypographyProps) => (
        <Paragraph {...props}>{props.children}</Paragraph>
    ),
    error: (props: ITypographyProps) => (
        <TextError {...props}>{props.children}</TextError>
    ),
    textButton: (props: ITypographyProps) => (
        <TextButton {...props}>{props.children}</TextButton>
    ),
    label: (props: ITypographyProps) => (
        <Label {...props}>{props.children}</Label>
    ),
    price: (props: ITypographyProps) => (
        <Price {...props}>{props.children}</Price>
    )
}
export const Typography: FC<ITypographyProps> = (props: ITypographyProps) => {
    return TypographySchema[props?.variant](props);
};