import {ReactNode} from "react";

type BasicLabelProps = {
    children: ReactNode;
};

const BasicLabel = ({children}: BasicLabelProps) => {
    return (
        <div
            className="flex flex-col justify-center p-6 duration-500 rounded motion-safe:hover:scale-105">
            <h2 className="text-lg text-gray-700">{children}</h2>
        </div>
    );
};

export default BasicLabel;