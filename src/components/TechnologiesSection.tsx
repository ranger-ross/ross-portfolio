import Image, {StaticImageData} from "next/image";
import BasicCard from "./basic/BasicCard";
import React from "react";
import springBootLogo from "../../assets/logos/springboot-logo.png";
import kubernetesLogo from "../../assets/logos/kubernetes-logo.png";
import javaLogo from "../../assets/logos/java-logo.jpg";
import gcpLogo from "../../assets/logos/gcp-logo.png";
import reactLogo from "../../assets/logos/react-logo.png";
import angularLogo from "../../assets/logos/angular-logo.png";
import gitlabCiLogo from "../../assets/logos/gitlab-logo.png";
import jenkinsLogo from "../../assets/logos/jenkins-logo.png";
import javascriptLogo from "../../assets/logos/javascript-logo.png";
import bootstrapLogo from "../../assets/logos/bootstrap-logo.png";
import materialUiLogo from "../../assets/logos/material-ui-logo.png";
import postgresLogo from "../../assets/logos/postgres-logo.png";
import nodeLogo from "../../assets/logos/node-logo.png";
import oracleLogo from "../../assets/logos/oracle-logo.png";
import gitlabActionsLogo from "../../assets/logos/github-actions-logo.png";
import awsLogo from "../../assets/logos/aws-logo.png";

type Technology = {
    name: string,
    logo?: StaticImageData,
    docs?: string
};

const technologies: Technology[] = [
    {name: 'Kubernetes', logo: kubernetesLogo, docs: 'https://kubernetes.io/'},
    {name: 'SpringBoot', logo: springBootLogo, docs: 'https://spring.io/'},
    {name: 'Google Cloud Platform', logo: gcpLogo, docs: 'https://cloud.google.com/'},
    {name: 'AWS', logo: awsLogo, docs: 'https://aws.amazon.com/'},
    {name: 'Java', logo: javaLogo, docs: 'https://www.java.com/'},
    {name: 'React', logo: reactLogo, docs: 'https://reactjs.org/'},
    {name: 'Angular', logo: angularLogo, docs: 'https://angular.io/'},
    {name: 'Gitlab CI', logo: gitlabCiLogo, docs: 'https://docs.gitlab.com/ee/ci/'},
    {name: 'Github Actions', logo: gitlabActionsLogo, docs: 'https://github.com/features/actions'},
    {name: 'Jenkins', logo: jenkinsLogo, docs: 'https://www.jenkins.io/'},
    {name: 'Javascript', logo: javascriptLogo, docs: 'https://www.javascript.com/'},
    {name: 'Bootstrap', logo: bootstrapLogo, docs: 'https://getbootstrap.com/'},
    {name: 'Material UI', logo: materialUiLogo, docs: 'https://mui.com/'},
    {name: 'NodeJS', logo: nodeLogo, docs: 'https://nodejs.org/en/about/'},
    {name: 'Postgres', logo: postgresLogo, docs: 'https://www.postgresql.org/'},
    {name: 'Oracle Database', logo: oracleLogo, docs: 'https://www.oracle.com/database/'},
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
                           className="rounded"
                           objectFit={"contain"}
                           alt={"- "}
                    />
                </div>
            ) : (
                <div className="pr-1 pl-1 inline-block w-7">
                    -&nbsp;
                </div>
            )}

            <div className="inline-block text-gray-200 pl-2">
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
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {technologies.map(tech => (
                        <TechnologyLabel key={tech.name} tech={tech}/>
                    ))}
                </div>
            </BasicCard>

        </div>
    );
};


export default TechnologiesSection;
