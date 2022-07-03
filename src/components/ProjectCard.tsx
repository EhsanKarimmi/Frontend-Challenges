import { ProjectCardProps } from "../interfaces/ProjectCardProps";

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-gray-50 col-span-3 rounded-md border-[1px] border-gray-300 dark:border-blue-500 cursor-pointer hover:shadow-md transition-all ease-linear duration-200">
            {/* Project image */}
            <div key={project.key} className=" overflow-hidden rounded-t-md">
                {project.tag ? (
                    <span className="absolute bg-red-500 z-10 py-1 px-2 m-1 rounded-full text-xs font-medium uppercase  text-white animate-pulse">
                        {project.tag}
                    </span>
                ) : null}

                <img
                    src={project.image}
                    alt="Project_Image"
                    className="rounded-t-md w-full h-56 hover:scale-105 transition-all ease-linear duration-200"
                />
            </div>
            {/* Project details */}
            <div className="p-4 h-52">
                <div className="text-lg font-semibold">
                    <h4>{project.title}</h4>
                </div>
                <div className="break-words mt-10 text-base font-medium text-gray-600">
                    <p>{project.description}</p>
                </div>
            </div>
        </div>
    );
}
export default ProjectCard;
