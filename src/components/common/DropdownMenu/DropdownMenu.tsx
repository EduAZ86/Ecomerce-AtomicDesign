import Link from "next/link";
import { FC } from "react";
import { IDropdownMenuProps } from "./types";
import { Typography } from "../Typography";
import { twMerge } from "tailwind-merge";

export const DropdownMenu: FC<IDropdownMenuProps> = ({ options }) => {
    return (
        <div
            className={twMerge(
                `w-full h-fit
                flex flex-col
                absolute
                top-full
                z-10
                gap-1
                rounded-lg                 
                `,
                "bg-light-secondary dark:bg-dark-secondary"
            )}
        >
            {options.map((option, index) => {
                return (
                    <span className={twMerge(
                        " w-full h-fit rounded-lg px-2 py-1 group",
                        "hover:bg-light-complementary hover:dark:bg-dark-complementary"
                    )}>
                        <Link
                            key={`${index}-${option.title}`}
                            href={option.href}                          
                        >
                            <Typography
                                variant="textButton"
                            >
                                {option.title}
                            </Typography>
                        </Link>
                    </span>
                )
            })}

        </div>
    )
}