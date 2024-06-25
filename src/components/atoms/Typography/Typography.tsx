import { FC } from "react"
import { ITypographyProps, ITypographyVariantProps, TypographyVariant } from "./types"
import { TypographyBody, TypographyH1, TypographyH2, TypographyH3, TypographyH4, TypographyH5, TypographyH6, TypographyLabel, TypographyLegend } from "./TypographyVariant"

const TypographySchema: TypographyVariant = {
    h1: (props: ITypographyVariantProps) => (
        <TypographyH1 {...props} >{props.children}</TypographyH1>
    ),
    h2: (props: ITypographyVariantProps) => (
        <TypographyH2 {...props} >{props.children}</TypographyH2>
    ),
    h3: (props: ITypographyVariantProps) => (
        <TypographyH3 {...props} >{props.children}</TypographyH3>
    ),
    h4: (props: ITypographyVariantProps) => (
        <TypographyH4 {...props} >{props.children}</TypographyH4>
    ),
    h5: (props: ITypographyVariantProps) => (
        <TypographyH5 {...props} >{props.children}</TypographyH5>
    ),
    h6: (props: ITypographyVariantProps) => (
        <TypographyH6 {...props} >{props.children}</TypographyH6>
    ),
    label: (props: ITypographyVariantProps) => (
        <TypographyLabel {...props} >{props.children}</TypographyLabel>
    ),
    body: (props: ITypographyVariantProps) => (
        <TypographyBody {...props} >{props.children}</TypographyBody>
    ),
    legend: (props: ITypographyVariantProps) => (
        <TypographyLegend {...props} >{props.children}</TypographyLegend>
    ),
}

export const Typography: FC<ITypographyProps> = ({ variant, ...otherProps }) => {
    return TypographySchema[variant](otherProps)
}