import Image, {StaticImageData} from "next/image";
import BasicCard from "./basic/BasicCard";
import React from "react";
import nihongoStats from "../../assets/projects/nihongo-stats.png";
import githubLogo from "../../assets/logos/github-logo.png";

type Project = {
    name: string,
    image: StaticImageData,
    link: string,
    description: string,
    repository: string,
    borderColors: {
        start: string,
        end: string
    }
};

const projects: Project[] = [
    {
        name: 'Nihongo Stats',
        image: nihongoStats,
        link: '/projects/nihongo-stats',
        description: 'A stats visualization tools for Japanese language learning platforms.',
        repository: 'https://github.com/ranger-ross/nihongo-stats',
        borderColors: {
            start: 'from-[#7928ca]',
            end: 'to-[#ff0080]'
        }
    },

];


type ProjectCardProps = {
    project: Project
};

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    return (
        <div className="relative flex h-fit min-h-[300px] max-w-[400px]">
            <div
                className={`rounded-xl w-full bg-gradient-to-br p-[2px] ${project.borderColors.start} ${project.borderColors.end}`}>
                <div className="h-full bg-black rounded-lg p-4">

                    <a href={project.link}
                       target={!project.link.startsWith("/") ? "_blank" : undefined}
                       rel="noreferrer"
                    >
                        <Image
                            src={project.image}
                            alt={project.name}
                        />
                    </a>


                    <div className="flex justify-between items-center text-white mb-4">
                        <a href={project.link}
                           target={!project.link.startsWith("/") ? "_blank" : undefined}
                           rel="noreferrer"
                        >
                            <h1 className="text-3xl font-extrabold">
                                {project.name}
                            </h1>
                        </a>

                        <a href={project.repository}
                           target="_blank"
                           rel="noreferrer"
                        >
                            <Image
                                src={githubLogo}
                                alt={'Repository'}
                                style={{filter: 'invert(100%)'}}
                                height={30}
                                width={30}
                            />
                        </a>

                    </div>

                    <div className="flex w-full justify-between mb-4">
                        <p className="text-lg mr-5 text-white flex items-center justify-center">
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>
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

                <div className="flex flex-wrap gap-2">
                    {projects.map(tech => (
                        <ProjectCard key={tech.name} project={tech}/>
                    ))}
                </div>
            </BasicCard>

        </div>
    );
};


export default ProjectsSection;
