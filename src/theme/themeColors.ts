import { TBackgroundGradient, TColors } from "@/components/types/tailwindStyleTypes";

type eventType = "group-hover:" | "group-active:" | "hover:" | "active:";

export const backgroundColorAsign = (color: TColors, eventType?: eventType): string => {
    if (color === "primary") {
        return eventType + "dark:bg-dark-primary" + " " + eventType + "bg-light-primary"
    }
    if (color === "secondary") {
        return eventType + "dark:bg-dark-secondary" + " " + eventType + "bg-light-secondary"
    }
    if (color === "acent") {
        return eventType + "dark:bg-dark-acent" + " " + eventType + "bg-light-acent"
    }
    if (color === "background") {
        return eventType + "dark:bg-dark-background" + " " + eventType + "bg-light-background"
    }
    if (color === "complementary") {
        return eventType + "dark:bg-dark-complementary" + " " + eventType + "bg-light-complementary"
    }
    return "dark:bg-transparent bg-transparent"
};

export const textColorAsign = (color: TColors, eventType?: eventType): string => {
    if (color === "primary") {
        return eventType + "dark:text-dark-primary" + " " + eventType + "text-light-primary"
    }
    if (color === "secondary") {
        return eventType + "dark:text-dark-secondary" + " " + eventType + "text-light-secondary"
    }
    if (color === "acent") {
        return eventType + "dark:text-dark-acent" + " " + eventType + "text-light-acent"
    }
    if (color === "background") {
        return eventType + "dark:text-dark-background" + " " + eventType + "text-light-background"
    }
    if (color === "complementary") {
        return eventType + "dark:text-dark-complementary" + " " + eventType + "text-light-complementary"
    }
    return "dark:text-transparent text-transparent"
};

export const backgroundGradientAsign = (color1: TColors | string, color2: TColors | string, directionGradient: TBackgroundGradient): string => {
    const dark = "dark:" + directionGradient + " " + "from-dark-" + color1 + " " + "to-dark-" + color2;
    const light = directionGradient + " " + "from-light-" + color1 + " " + "to-light-" + color2;
    return dark + " " + light
}