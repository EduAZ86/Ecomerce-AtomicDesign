import { FC } from "react";
import { Button, Select, Typography } from "../common";
import { faBars, faThLarge } from "@fortawesome/free-solid-svg-icons";

export const Pagination: FC = () => {
    const lengthPage = 20
    const currentStartPage = 1
    const results = 120
    return (
        <div
            className={
                `
                w-full h-10
                bg-light-secondary dark:bg-dark-secundary
                flex flex-row
                items-center
                justify-between
                px-10
                `}
        >
            <Typography
                key='pages'
                variant="altText"
                textSize="text-sm"
            >
                Showing {`${currentStartPage} - ${lengthPage} of ${results}`}
            </Typography>
            <div
                className=" flex flex-row items-center gap-6"
            >
                <Typography
                    key='sort'
                    variant="altText"
                    textSize="text-sm"
                >
                    Sort by
                </Typography>
                <Select
                    key="sortByPrice"
                    name="sortByPrice"
                    placeholder="Price"
                    optionStyle={{
                        background: 'transparent',

                    }}
                    options={[
                        {
                            label: 'low to high',
                            value: 'up'
                        },
                        {
                            label: 'high to low',
                            value: 'down'
                        }
                    ]}
                    selectStyle={
                        {
                            background: 'acent',
                            rounded: "rounded-lg"
                        }
                    }
                />
                <Select
                    key="sortByDiscount"
                    name="sortByDiscount"
                    placeholder="Discount"
                    optionStyle={{
                        background: 'transparent',
                        textColor: 'primary'
                    }}
                    options={[
                        {
                            label: 'highest to lowest',
                            value: 'up'
                        },
                        {
                            label: 'smallest to largest',
                            value: 'down'
                        }
                    ]}
                    selectStyle={
                        {
                            background: 'acent',
                            rounded: "rounded-lg"
                        }
                    }
                />
            </div>
            <div className={`
                flex flex-row gap-4 items-center
            `}>
                <Button
                    key="CardGrid"
                    styleButton={{
                        background: 'transparent',
                        textColor: 'complementary',

                    }}
                    Icon={
                        {
                            icon: faThLarge,
                            iconSize: 'text-xl',
                            position: "leaft",

                        }
                    }
                />
                <Button
                    key="CardList"
                    styleButton={{
                        background: 'background',
                        textColor: 'complementary'
                    }}
                    Icon={
                        {
                            icon: faBars,
                            iconSize: "text-xl",
                            position: "leaft",

                        }
                    }
                />

            </div>


        </div>
    )
}