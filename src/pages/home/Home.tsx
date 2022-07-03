import { useState } from "react";
import Navbar from "../../components/Navbar";
import heroImage from "../../assets/images/heroImage.png";
import { listOfProjects } from "../../components/ListOfProjects";
import ProjectCard from "../../components/ProjectCard";

function Home() {
    const [search, setSearch] = useState<string | null>(null);
    return (
        <div className="w-full bg-[#EEEEEE] min-h-screen max-h-fit dark:bg-blue-900 p-2">
            {/* Home Header  */}
            <header className="">
                <Navbar search={search} setSearch={setSearch} />
            </header>
            {/* Home Content */}
            <section>
                {/* Hero section */}
                <div className="bg-gradient-to-t from-gray-100 to-gray-300 w-full grid grid-cols-12 my-2 px-4 rounded-md border-[1px] border-gray-300 dark:border-blue-500 ">
                    {/* Hero title */}
                    <div className="col-span-6 flex items-center justify-center">
                        <h3 className=" w-4/6 text-3xl font-semibold uppercase">
                            A set of challenges and reusable components of Frontend using the
                            React.js
                        </h3>
                    </div>
                    {/* Hero image */}
                    <div className="col-span-6 flex items-center justify-end">
                        <img src={heroImage} alt="Hero_Image" className="w-6/12 h-auto " />
                    </div>
                </div>
                {/* List of projects card */}
                <div className="bg-white grid grid-cols-12 gap-4 p-4 rounded-md border-[1px] border-gray-300 dark:border-blue-500">
                    {listOfProjects.map((project) => {
                        return <ProjectCard project={project} />;
                    })}
                </div>
            </section>
        </div>
    );
}
export default Home;
