import "../styles/globals.css";
import type {AppType} from "next/dist/shared/lib/utils";
import HeaderBar from "../components/HeaderBar";

const MyApp: AppType = ({Component, pageProps}) => {
    return (
        <>
            <HeaderBar/>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
