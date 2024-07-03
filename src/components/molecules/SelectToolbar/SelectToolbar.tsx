import { FC } from "react";
import { ISelectToolbarProps } from "./types";
import { BasicSelect } from "@/components/atoms";

export const SelectToolbar: FC<ISelectToolbarProps> = ({
    options,
    placeholder
}) => {
    return (
        <BasicSelect
            optionStyle={ }
            options={options}
            placeholder={placeholder}
            placeholderStyle={ }
            styles={ }
            selectProps={{
                onChange:
            }}
        />
    )
}