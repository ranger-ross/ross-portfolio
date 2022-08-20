import Image from "next/image";
import githubLogo from "../../assets/logos/github-logo.png";

const githubLink = 'https://github.com/ranger-ross';

const LinksSection = () => {
    const logoSize = 35;
    return (
        <div className="flex gap-2 justify-center pt-5">
            <div className="duration-500 motion-safe:hover:scale-110 cursor-pointer">
                <a href={githubLink} target={"_blank"} rel="noreferrer">
                    <Image src={githubLogo}
                           height={logoSize}
                           width={logoSize}
                           style={{filter: 'invert(100%)'}}
                           alt={"github"}
                    />
                </a>
            </div>
        </div>
    );
};

export default LinksSection;