import { FC } from "react";
import { IOptionData, ISelectProps } from "./types";
import { OptionSelect } from "./Option";
import { twMerge } from "tailwind-merge";
import { backgroundColorAsign } from "@/theme/themeColors";

export const Select: FC<ISelectProps> = ({
    options,
    onChange,
    value,
    placeholder,
    disabled,
    name,
    optionStyle,
    selectStyle: { background, height, rounded, style, width }
}) => {
    return (
        <select
            onChange={onChange}
            title={name}
            value={value}
            disabled={disabled}
            name={`name-select-${name}`}
            id={`id-select-${name}`}
            className={twMerge(
                width ? width : "w-fit",
                height ? height : "h-fit  ",
                "pl-3 pr-1 py-2 text-xs font-bold",
                rounded ? rounded : "rounded-none",
                background && backgroundColorAsign(background)
            )

            }
            style={style}
        >
            {placeholder && <option value="" >{placeholder}</option>}
            {options.map((option: IOptionData) => (
                <OptionSelect
                    key={option.value}
                    label={option.label}
                    value={option.value}
                    optionStyle={optionStyle}
                />
            ))}
        </select>
    )
}