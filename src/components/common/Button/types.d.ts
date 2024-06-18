import { TColors, TFontSize, TRounded, TWidth } from "@/types/tailwindStyleTypes";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CSSProperties, ReactNode } from "react";

type TVariant = 'text' | 'contained' | 'outlined';
type TType = 'submit' | 'button';
type TSize = 'xs' | 'small' | 'normal' | 'large' | 'xl' | 'fullWidth' | 'auto';
type IconPosition = 'leaft' | 'right' | 'around';

enum ButtonSize {
    xs = '50px',
    small = '100px',
    normal = '150px',
    large = '200px',
    xl = '250px',
    fullWidth = '100%',
    auto = 'auto'
}

interface IStyleButton {
    width?: TWidth;
    background: TColors;
    textColor: TColors;
    rounded?: TRounded;
    style?: CSSProperties;
}

interface IIconStyle {
    position: IconPosition;
    icon: IconProp;
    iconSize: TFontSize;
    style?: CSSProperties;
}


export interface IButtonProps {
    loading?: boolean;
    disabled?: boolean;
    type?: TType;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    variant?: TVariant;
    children?: ReactNode;
    size?: TSize;
    title?: string;
    styleButton: IStyleButton;
    Icon?: IIconStyle;
}



export interface IContentButtonProps extends Omit<IButtonProps, 'styleIcon'> { }

export interface IIconButtonProps extends Omit<IIconStyle, 'position'> { }