import Image, {StaticImageData} from "next/image";
import BasicCard from "./basic/BasicCard";
import springBootLogo from "../../assets/logos/springboot-logo.png";
import kubernetesLogo from "../../assets/logos/kubernetes-logo.png";
import javaLogo from "../../assets/logos/java-logo.jpg";
import gcpLogo from "../../assets/logos/gcp-logo.png";
import reactLogo from "../../assets/logos/react-logo.png";
import angularLogo from "../../assets/logos/angular-logo.png";

type Technology = {
    name: string,
    logo?: StaticImageData,
    docs?: string
};

const technologies: Technology[] = [
    {name: 'Kubernetes', logo: kubernetesLogo, docs: 'https://kubernetes.io/'},
    {name: 'SpringBoot', logo: springBootLogo, docs: 'https://spring.io/'},
    {name: 'Google Cloud Platform', logo: gcpLogo, docs: 'https://cloud.google.com/'},
    {name: 'Java', logo: javaLogo, docs: 'https://www.java.com/'},
    {name: 'React', logo: reactLogo, docs: 'https://reactjs.org/'},
    {name: 'Angular', logo: angularLogo, docs: 'https://angular.io/'},
];


type TechnologyLabelProps = {
    tech: Technology
};

const TechnologyLabel: React.FC<TechnologyLabelProps> = ({tech}) => {
    const logoSize = 20;
    const pointerClass = tech.docs ? 'cursor-pointer' : '';
    return (
        <a
            className={`text-2xl mb-3 duration-500 motion-safe:hover:scale-105 ${pointerClass}`}
            href={tech.docs}
            target={"_blank"}
            rel="noreferrer"
        >
            {tech.logo ? (
                <div className="pr-1 pl-1 inline-block">
                    <Image src={tech.logo}
                           height={logoSize}
                           width={logoSize}
                           layout={"fixed"}
                           objectFit={"contain"}
                           alt={"- "}
                    />
                </div>
            ) : (
                <div className="pr-1 pl-1 inline-block w-7">
                    -&nbsp;
                </div>
            )}

            <div className="inline-block text-gray-600 ">
                {tech.name}
            </div>

        </a>
    );
};

const TechnologiesSection = () => {
    return (
        <div className="flex flex-col gap-3 p-4 w-full">
            <div
                className="font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-fuchsia-400 to-indigo-500 h-14">
                Technologies <div className="inline-block text-black">🚀</div>
            </div>

            <BasicCard growOnHover={false}>
                {technologies.map(tech => (
                    <TechnologyLabel key={tech.name} tech={tech}/>
                ))}
            </BasicCard>

        </div>
    );
};


export default TechnologiesSection;
