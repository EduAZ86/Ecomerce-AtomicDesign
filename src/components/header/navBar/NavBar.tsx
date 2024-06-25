'use client'
import { FC, useState } from "react";
import { Button, Select, Typography } from "@/components/common";
import ThemeSwitcher from "@/theme/ThemeSwitcher";


import { IOptionData } from "@/components/common/Select/types";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { SearchBar } from "../searchBar";
import { UserButton } from "./UserButton/UserButton";

export const NavBar: FC = () => {
    const option1: IOptionData = {
        label: "motherboard",
        value: "mother"
    }
    const option2: IOptionData = {
        label: "graphicsCard",
        value: "gpu"
    }
    const [onFocus, setOnFocus] = useState<boolean>(false)
    const options = [option1, option2]

    const handleChange = () => {

    }
    const handlerFocus = () => {
        setOnFocus(true)
        console.log("focus");

    }
    const handlerBlur = () => {
        setOnFocus(false)
        console.log("blur")
    }

    return (
        <div
            className={`
            w-full h-24
            flex 
            md:flex-row flex-col-reverse 
            relative
            bg-light-primary
            items-center justify-center
        `}
        >
            <Select
                key={`all-categorys`}
                optionStyle={{
                    align: 'items-center',
                    background: "transparent",
                    textColor: "complementary",
                    textSize: "text-xs"
                }}
                selectStyle={{
                    background: 'secondary',
                    height: 'h-8',
                    width: 'w-fit',
                    rounded: 'rounded-l-md'
                }}
                name="allCategories"
                options={options}
                placeholder="All Category"

            />
            <SearchBar />
            <div
                className={`                  
                    flex flex-row relative
                    w-full
                    ml-8
                    md:justify-center justify-between
                    gap-6
                `}
            >
                <div className={`
                    flex flex-row
                    gap-1
                    md:items-center
                    md:justify-start 
                `}>
                    <Button
                        key='farShopping'
                        Icon={{
                            icon: faCartShopping,
                            iconSize: 'text-xl',
                            position: "leaft"
                        }}
                        styleButton={{
                            background: 'transparent',
                            textColor: 'secondary'

                        }}
                    />
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
                            textSize="text-sm"
                        >
                            Cart
                        </Typography>
                        <Typography
                            key="priceCart"
                            variant="label"
                            textColor="secondary"
                            textSize="text-xs"
                        >
                            $ 150.20
                        </Typography>
                    </div>

                </div>
                <UserButton />
                <ThemeSwitcher />

            </div>
        </div>
    )
}