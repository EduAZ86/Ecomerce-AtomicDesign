import { FC } from "react";
import { IOption } from "./types";

export const OptionSelect: FC<IOption> = ({ label, value, optionStyle: { align, textSize, textColor, style } }) => {
    return (
        <option
            value={value}
            className={`
                md:${align}  
                ${textSize ? textSize : 'text-sm'}
                font-roboto
                ${textColor && `text-light-${textColor} dark:text-dark-${textColor}`} 
                cursor-pointer
            `}
            style={style}
        >
            {label}
        </option>
    )
}