import { TAlign, TColors, TFontSize, THeight, TRounded, TWidth } from "@/components/types/tailwindStyleTypes";


export interface IOptionStyle {
    align?: TAlign;
    textSize?: TFontSize;
    textColor?: TColors;
    background?: TColors;
    style?: CSSProperties;
};

export interface IOptionData {
    value: string;
    label: string;
}

export interface IOption extends IOptionData {
    optionStyle: IOptionStyle;
};

interface ISelectStyle {
    rounded?: TRounded;
    width?: TWidth;
    height?: THeight;
    background?: TColors;
    style?: CSSProperties;
}

export interface ISelectProps {
    options: IOptionData[];
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    name: string;
    optionStyle: IOptionStyle;
    selectStyle: ISelectStyle;
}