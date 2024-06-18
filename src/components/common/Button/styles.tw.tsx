import { FC } from "react";
import { IContentButtonProps, IIconButtonProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContentButton: FC<IContentButtonProps> = ({
    children,
    disabled,
    onClick,
    type,
    styleButton: {
        rounded,
        background,
        textColor,
        style,
        width
    },
}) => {

    return (
        <button
            className={`
            flex flex-row relative
            ${width ? width : "w-fit"}
            ${background ? `bg-light-${background} dark:bg-dark-${background}` : 'bg-transparent'}
            ${textColor && `dark:text-dark-${textColor} text-light-${textColor}`}            
            px-3 py-2
            ${rounded ? rounded : 'rounded'}
            active:scale-95
            justify-center
            items-center
            gap-3
            `}
            onClick={onClick}
            disabled={disabled ? disabled : false}
            style={style}
            type={type}
        >
            {children}
        </button>
    )
}

export const IconContainer: FC<IIconButtonProps> = ({ icon, iconSize, style }) => {
    return (
        <>{
            <span
                className={`
                ${iconSize}
                flex flex-row
                relative
                justify-center
                text-center                                                
            `}
            >
                <FontAwesomeIcon
                    icon={icon}
                    style={style}
                />
            </span>
        }
        </>
    )
}