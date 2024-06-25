import { Button } from "@/components/Button";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { FC } from "react";

export const SearchBar: FC = () => {
    return (
        <div
            className={`
                w-1/2 h-8
                flex flex-row                             
            `}
        >
            <input
                className={`
                    flex-1
                    bg-light-secondary             
                    border-l-2
                    text-xs                  
                    px-2                 
                `}
                placeholder="Search products"
                type="text"
                style={{ lineHeight: "3rem" }}
            />
            <Button
                key='searchButton'

                styleButton={{
                    background: "acent",
                    textColor: "secondary",
                    rounded: "rounded-r-md",                   
                }}               
                Icon={{
                    icon: faSearch,
                    iconSize: 'text-sm',
                    position: 'leaft'
                }}
            />

        </div>
    )
}