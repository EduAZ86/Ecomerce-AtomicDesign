import { FC } from "react";
import { IOption } from "./types";
import { twMerge } from "tailwind-merge";
import { textColorAsign } from "@/theme/themeColors";

export const OptionSelect: FC<IOption> = ({ label, value, optionStyle: { align, textSize, textColor, style } }) => {
    return (
        <option
            value={value}
            className={twMerge(
                "font-roboto cursor-pointer",
                "md:" + align,
                textSize ? textSize : 'text-sm',
                textColor && textColorAsign(textColor)
            )

            }
            style={style}
        >
            {label}
        </option>
    )
}