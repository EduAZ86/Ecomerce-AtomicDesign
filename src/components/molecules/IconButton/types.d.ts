import { IBasicButtonProps } from "@/components/atoms/BasicButton/types";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IIconButtonProps extends IBasicButtonProps {
    icon: IconProp;
}