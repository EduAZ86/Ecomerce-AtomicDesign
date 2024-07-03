import { FC } from "react";
import { IBasicSelectProps } from "./types";
import { SelectStyled } from "./SelectStyled";
import { Option } from "./Option";
import { Typography } from "../Typography/Typography";

export const BasicSelect: FC<IBasicSelectProps> = ({
    options,
    placeholder,
    placeholderStyle,
    selectProps,
    styles,
    optionStyle
}) => {
    return (
        <SelectStyled
            selectProps={selectProps}
            styles={styles}
        >
            {placeholder && <option value="" >
                <Typography
                    variant="h5"
                    styles={placeholderStyle}
                >
                    {placeholder}
                </Typography>
            </option>}
            {options.map((option, index) => {
                return (
                    <Option
                        option={option}
                        key={index}
                        {...optionStyle}
                    />

                )
            })}
        </SelectStyled>
    )
}
