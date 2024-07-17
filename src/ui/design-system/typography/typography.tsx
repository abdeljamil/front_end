import clsx from "clsx";


interface Props {
    variant?:
    | "display"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "lead"
    | "body-lg"
    | "body-base"
    | "body-sm"
    | "caption1"
    | "caption2"
    | "caption3"
    | "caption4";
    Component?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "a" | "div";
    theme?: "black" | "gray" | "white" | "primary" | "secondary";
    weigth?: "regular" | "medium";
    className?: string;
    children: React.ReactNode;
}

export const Typography = ({
    variant = "h3",
    Component: Component = "div",
    theme = "black",
    weigth = "regular",
    children,
    className,
}: Props) => {
    let varianStyle: string = "", colorStyles: string="";
    switch (variant) {
        case "display":
            varianStyle = "text-8xl"
            break;
        case "h1":
            varianStyle = "text-7xl"
            break;
        case "h2":
            varianStyle = "text-6xl"
            break;
        case "h3"://default
            varianStyle = "text-5xl"
            break;
        case "h4":
            varianStyle = "text-4xl"
            break;
        case "h5":
            varianStyle = "text-3xl"
            break;

        case "lead":
            varianStyle = "text-2xl"
            break;
        case "body-lg":
            varianStyle = "text-lg"
            break;
        case "body-base":
            varianStyle = "text-base"
            break;

        case "body-sm":
            varianStyle = "text-sm"
            break;

        case "caption1":
            varianStyle = "text-caption1"
            break;
        case "caption2":
            varianStyle = "text-caption2"
            break;

        case "caption3":
            varianStyle = "text-caption3"
            break;
        case "caption4":
            varianStyle = "text-caption4"
            break;

    }
    switch (theme) {
        case "black"://default
            colorStyles = "text-gray";
            break;
        case "gray":
            colorStyles = "text-gray-700";
            break;
        case "white":
            colorStyles = "text-white";
            break;
        case "primary":
            colorStyles = "text-primary";
            break;
        case "secondary":
            colorStyles = "text-secondary";
            break;

        default:
            break;
    }
    return (
        <>
            <Component 
                className={clsx(
                    varianStyle,
                    colorStyles, 
                    weigth === "medium" && "font-medium", 
                    className, 
                    )}>
                {children}
            </Component>
        </>
    )
}


















