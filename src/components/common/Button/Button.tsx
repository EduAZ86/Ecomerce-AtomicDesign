import { FC } from "react";
import { Typography } from "../Typography";
import { ContentButton, IconContainer } from "./styles.tw";
import { IButtonProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Button: FC<IButtonProps> = ({ title, Icon, loading, ...ContentProps }) => {
    return (
        <ContentButton
            {...ContentProps}
        >
            {loading ?
                <svg className="animate-spin h-5 w-5 "><FontAwesomeIcon icon={faSpinner} /></svg>
                :
                <>
                    {(Icon?.position === 'leaft' || Icon?.position === 'around') &&
                        <IconContainer
                            key='iconLeft'
                            icon={Icon.icon}
                            iconWhidth={Icon.iconWhidth}
                        />}
                    {title && <Typography
                        variant="textButton"
                    >
                        {title}
                    </Typography>}
                    {(Icon?.position === 'right' || Icon?.position === 'around') &&
                        <IconContainer
                            key='iconRight'
                            icon={Icon.icon}
                            iconWhidth={Icon.iconWhidth}
                        />}
                </>
            }

        </ContentButton>
    )
}