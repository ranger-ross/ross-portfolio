import {ReactNode} from "react";

const BlinkingCursor = () => {
    return (
        <div className="blinking-cursor bg-fuchsia-400"/>
    );
};

type TerminalTextProps = {
    children: ReactNode;
};

const TerminalText = ({children}: TerminalTextProps) => {
    return (
        <div className="flex bg-gray-800 pl-4 pr-4 rounded" style={{font: 'caption'}}>
            <h2 className="text-lg text-indigo-400 pr-1">$</h2>
            <h2 className="text-lg text-gray-200 pr-1">{children}</h2>
            <BlinkingCursor/>
        </div>
    );
};

export default TerminalText;