import {CSSProperties, ReactNode} from "react";

type BasicCardProps = {
    children: ReactNode,
    growOnHover?: boolean,
    extraClasses?: string
};

const BasicCard = ({children, growOnHover, extraClasses}: BasicCardProps) => {
    const hoverClass = growOnHover !== false ? "motion-safe:hover:scale-105" : '';
    return (
        <div
            className={`flex flex-col justify-center p-6 duration-500 rounded shadow-xl ${hoverClass} ${extraClasses ?? ""}`}>
            {children}
        </div>
    );
};

export default BasicCard;