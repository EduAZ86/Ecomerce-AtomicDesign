import { FC } from "react";
import { IOptionData, ISelectProps } from "./types";
import { OptionSelect } from "./Option";

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
            className={`
            ${height ? height : "h-fit"}
            ${width ? width : "w-fit"}
            bg-light-${background}
            ${rounded ? rounded : "rounded-none"}
            pl-3 pr-1 py-2
            text-xs  
            font-bold         
        `}
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