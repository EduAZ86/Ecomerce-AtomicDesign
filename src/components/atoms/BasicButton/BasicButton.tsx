import { FC } from "react";
import { ButtonStyled } from "./ButtonStyled";
import { IBasicButtonProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const BasicButton: FC<IBasicButtonProps> = ({
    loading,
    ...otherProps
}) => {
    return (
        <ButtonStyled
            {...otherProps}

        >
            {loading ?
                <svg className="animate-spin h-5 w-5 "><FontAwesomeIcon icon={faSpinner} /></svg>
                :
                otherProps.children
            }
        </ButtonStyled>
    )
}