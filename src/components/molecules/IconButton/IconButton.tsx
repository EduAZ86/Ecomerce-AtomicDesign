import { FC } from "react";
import { IIconButtonProps } from "./types";
import { BasicButton } from "@/components/atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconButton: FC<IIconButtonProps> = ({
    icon,
    buttonProps,
    styles,
    activeStyle,
    hoverStyle,
}) => {
    return (
        <BasicButton
            buttonProps={buttonProps}
            styles={styles}
            activeStyle={{
                activePress: activeStyle ? activeStyle.activePress : "scale-95",
            }}
            hoverStyle={{
                background: hoverStyle?.background
            }}
        >
            <FontAwesomeIcon
                icon={icon}
            />
        </BasicButton>
    )
}