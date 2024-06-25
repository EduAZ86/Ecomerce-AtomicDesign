'use client'
import { Button, Typography } from "@/components/common";
import { DropdownMenu } from "@/components/common/DropdownMenu/DropdownMenu";
import { OptionMenu } from "@/components/common/DropdownMenu/types";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FC, useState } from "react";

export const UserButton: FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false)

    const option1Menu: OptionMenu = {
        href: "",
        styleOption: "",
        title: "logout"
    }
    const option2Menu: OptionMenu = {
        href: "",
        styleOption: "",
        title: "compras"
    }
    const option3Menu: OptionMenu = {
        href: "",
        styleOption: "",
        title: "envios"
    }
    const option4Menu: OptionMenu = {
        href: "",
        styleOption: "",
        title: "dinero disponible"
    }
    const option5Menu: OptionMenu = {
        href: "",
        styleOption: "",
        title: "carrito"
    }

    const optionsMenu = [option1Menu, option2Menu, option3Menu, option4Menu, option5Menu]
    return (
        <div className={`
        flex relative
        w-30
        md:flex-row
        gap-1
        items-center
        justify-start
    `}
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
        >
            <Button
                key='faUser'
                Icon={{
                    icon: faUser,
                    iconSize: 'text-xl',
                    position: "leaft"
                }}
                styleButton={{
                    background: 'transparent',
                    textColor: 'secondary'

                }}

            >

            </Button>
            {showMenu &&
                <DropdownMenu
                    options={optionsMenu}
                />
            }
            <div
                className={`
                flex flex-col
                justify-center
                items-start                            
            `}
            >
                <Typography
                    key="cart"
                    variant="label"
                    textColor="secondary"
                >
                    User
                </Typography>
                <Typography
                    key="priceCart"
                    variant="label"
                    textColor="secondary"
                    textSize="text-xs"
                >
                    UserName
                </Typography>
            </div>

        </div>
    )
}