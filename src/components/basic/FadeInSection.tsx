import React, {useRef} from "react";
import {ScriptProps} from "next/dist/client/script";
import {useOnScreen} from "../../hooks/useOnScreen";

const FadeInSection: React.FC<ScriptProps> = ({children}) => {
    const domRef = useRef<any>();
    const {isVisible} = useOnScreen(domRef);
    return (
        <section ref={domRef}

                 className={isVisible ? ' is-visible' : ''}
        >
            {children}
        </section>
    );
};

export default FadeInSection;