import Image, {StaticImageData} from "next/image";
import BasicCard from "./basic/BasicCard";
import React from "react";
import kubernetesLogo from "../../assets/logos/kubernetes-logo.png";

type Project = {
    name: string,
    image?: StaticImageData,
    description: string,
    repository: string
};

const projects: Project[] = [
    {
        name: 'Nihongo Stats',
        image: kubernetesLogo,
        description: 'https://kubernetes.io/',
        repository: 'https://github.com/ranger-ross/nihongo-stats'
    },

];


type ProjectCardProps = {
    project: Project
};

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    return (
        <div>
            TODO: impl
        </div>
    );
};

const ProjectsSection = () => {
    return (
        <div className="flex flex-col gap-3 p-4 w-full">

            <BasicCard growOnHover={false}>
                <div
                    className="font-extrabold text-transparent text-4xl sm:text-5xl bg-clip-text bg-gradient-to-r from-sky-300 to-blue-400 h-14 w-fit mb-3">
                    Projects <div className="inline-block text-black">🎨</div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                    {projects.map(tech => (
                        <ProjectCard key={tech.name} project={tech}/>
                    ))}
                </div>
            </BasicCard>

        </div>
    );
};


export default ProjectsSection;
