import type {NextPage} from "next";
import Head from "next/head";
import FadeInSection from "../components/basic/FadeInSection";
import BasicCard from "../components/basic/BasicCard";
import TechnologiesSection from "../components/TechnologiesSection";
import LinksSection from "../components/LinksSection";
import TerminalText from "../components/basic/TerminalText";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ross&apos;s Home Page</title>
                <meta name="description" content="The homepage/portfolio for Ross"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <div className="container mx-auto flex flex-col items-center justify-center h-48">
                    <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
                        Ross&apos;s Home Page
                    </h1>
                </div>

                <LinksSection/>

                <div className="m-10">
                    <BasicCard>
                        <div className="flex flex-col items-center justify-center text-center">
                            <TerminalText>whoami</TerminalText>

                            <div className="w-10/12">
                                I am a software engineer/architect currently
                                living in <div className="inline-block">Tokyo, Japan 🇯🇵 </div><br/>
                                I like designing computer systems, and apparently
                                got good enough that companies pay me to do it. <br/>
                                Here you can see what I&apos;m working on 👀
                            </div>
                        </div>
                    </BasicCard>
                </div>


                <FadeInSection>
                    <TechnologiesSection/>
                </FadeInSection>

            </main>


        </>
    );
};


export default Home;
