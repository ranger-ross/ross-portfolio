import Image, {StaticImageData} from "next/image";
import BasicCard from "./basic/BasicCard";
import springBootLogo from "../../assets/logos/springboot-logo.png";
import kubernetesLogo from "../../assets/logos/kubernetes-logo.png";

type TechnologyLabelProps = {
    name: string,
    logo?: StaticImageData
};

const TechnologyLabel: React.FC<TechnologyLabelProps> = ({name, logo}) => {
    const logoSize = 20;

    return (

        <div className="text-2xl mb-3 duration-500 motion-safe:hover:scale-105">
            {logo ? (
                <div className="pr-1 pl-1 inline-block">
                    <Image src={logo}
                           height={logoSize}
                           width={logoSize}
                           alt={"- "}
                    />
                </div>
            ) : (
                <div className="pr-1 pl-1 inline-block w-7">
                    -&nbsp;
                </div>
            )}

            <div className="inline-block text-gray-600 ">
                {name}
            </div>

        </div>
    );
};

type Technology = {
    name: string,
    logo?: StaticImageData,
    docs?: string
};

const technologies: Technology[] = [
    {name: 'Kubernetes', logo: kubernetesLogo},
    {name: 'SpringBoot', logo: springBootLogo},

];


const TechnologiesSection = () => {
    return (
        <div className="flex flex-col gap-3 p-4 w-full">
            <div className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-500 h-14">
                Technologies <div className="inline-block text-black">🚀</div>
            </div>

            <BasicCard growOnHover={false}>
                {technologies.map(tech => (
                    <TechnologyLabel key={tech.name} name={tech.name} logo={tech.logo}/>
                ))}
            </BasicCard>

        </div>
    );
};


export default TechnologiesSection;
