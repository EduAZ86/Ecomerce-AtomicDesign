import { FC } from "react";
import { SearchBar } from "../searchBar/SearchBar";
import { Button } from "@/components/common/Button";
import { Select } from "@/components/common/Select/Select";
import { Typography } from "@/components/common/Typography";
import { IOptionData } from "@/components/common/Select/types";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

export const NavBar: FC = () => {
    const option1: IOptionData = {
        label: "motherboard",
        value: "mother"
    }
    const option2: IOptionData = {
        label: "graphicsCard",
        value: "gpu"
    }

    const options = [option1, option2]

    const handleChange = () => {

    }

    return (
        <div
            className={`
            w-full h-24
            flex flex-row
            relative
            bg-light-primary
            items-center justify-center
        `}
        >
            <Select
                optionStyle={{
                    align: 'items-center',
                    background: "transparent",
                    textColor: "complementary",
                    textSize: "text-xs"
                }}
                selectStyle={{
                    background: 'background',
                    height: 'h-8',
                    width: 'w-fit',
                    rounded: 'rounded-l-md'
                }}
                options={options}
                placeholder="All Category"
            />
            <SearchBar />
            <div
                className={`                  
                    flex flex-row relative
                    ml-8
                    justify-center
                    gap-6

                `}
            >
                <div className={`
                    flex flex-row
                    gap-1
                    items-center
                    justify-start
                `}>
                    <Button
                        key='farShopping'
                        Icon={{
                            icon: faCartShopping,
                            iconWhidth: 'w-7',
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
                        <Typography key="cart" variant="label" textColor="secondary" textSize="text-sm">Cart</Typography>
                        <Typography key="priceCart" variant="label" textColor="secondary" textSize="text-xs">$ 150.20</Typography>
                    </div>

                </div>
                <div className={`
                    flex flex-row
                    gap-1
                    items-center
                    justify-start
                `}>
                    <Button
                        key='faUser'
                        Icon={{
                            icon: faUser,
                            iconWhidth: 'w-5',
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
                        <Typography key="cart" variant="label" textColor="secondary">User</Typography>
                        <Typography key="priceCart" variant="label" textColor="secondary" textSize="text-xs">UserName</Typography>
                    </div>

                </div>

            </div>
        </div>
    )
}