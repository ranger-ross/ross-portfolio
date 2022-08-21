import type {NextPage} from "next";
import Head from "next/head";
import BasicCard from "../components/basic/BasicCard";
import TechnologiesSection from "../components/TechnologiesSection";
import ProjectsSection from "../components/ProjectsSection";
import LinksSection from "../components/LinksSection";
import TerminalText from "../components/basic/TerminalText";
import Particles from "../components/particles/Particles";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Ross&apos;s Home Page</title>
                <meta name="description" content="The homepage/portfolio for Ross"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="overflow-hidden">
                <Particles/>
                <div className="container mx-auto flex flex-col items-center justify-center text-center md:h-48">
                    <h1 className="
                    text-5xl md:text-[5rem] leading-normal font-extrabold
                    text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-500
                    "
                    >
                        Ross&apos;s Home Page
                    </h1>
                </div>

                <LinksSection/>

                <div className="mt-10 sm:m-10">
                    <BasicCard growOnHover={false}>
                        <div className="flex flex-col items-center justify-center text-center">
                            <TerminalText>whoami</TerminalText>

                            <div className="w-10/12 text-white mt-3">
                                Hey, my name is Ross Sullivan. I&apos;m a software engineer/architect currently
                                living in <div className="inline-block">Tokyo, Japan 🇯🇵 </div><br/>
                                I like designing computer systems, and apparently
                                got good enough that companies pay me to do it. <br/>
                                Here you can see what I&apos;m working on 👀
                            </div>
                        </div>
                    </BasicCard>
                </div>


                <TechnologiesSection/>

                <ProjectsSection/>

            </main>


        </>
    );
};


export default Home;
