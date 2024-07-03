import { Typography } from "@/components/atoms";
import { SelectToolbar, ToolbarContainer } from "@/components/molecules";
import { FC } from "react";

export const ProductToolbar: FC = () => {
    return (
        <ToolbarContainer>
            <Typography>

            </Typography>
            <SelectToolbar
                options={ }
                placeholder=""
                key="discount-order"
            />
            <SelectToolbar
                options={ }
                placeholder=""
                key="price-order"
            />
        </ToolbarContainer>
    )
}