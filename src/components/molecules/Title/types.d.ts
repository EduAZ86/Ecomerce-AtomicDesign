export type TitleVariant = {
    mainTitle: FC<ITitleVariantProps>;
    title: FC<ITitleVariantProps>;
    subTitle: FC<ITitleVariantProps>;
    categoryTitle: FC<ITitleVariantProps>;
    cardTitle: FC<ITitleVariantProps>;
};

export interface ITitleVariantProps extends Omit<ITitleProps, "variant"> { }

export interface ITitleProps {
    variant: keyof TitleVariant;
    text: String;
};