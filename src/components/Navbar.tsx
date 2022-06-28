import { NavbarProps } from "../interfaces/NavbarProps";
import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";
import { Switch } from "@headlessui/react";

function Navbar({ search, setSearch }: NavbarProps) {
    const [theme, setTheme] = useState(false);

    return (
        <nav className="h-14 flex items-center justify-between  bg-white dark:bg-blue-500 border-[1px] border-gray-400 dark:border-blue-500 px-4 rounded-md shadow-md">
            {/* Logo */}
            <div>
                <h1 className="navbarTitle uppercase text-xl font-bold">Edi Code</h1>
            </div>
            {/* Search */}
            <div className="w-3/12 flex items-center justify-start bg-gray-200 dark:bg-blue-500  px-2 gap-2 rounded-md text-base font-medium">
                <BiSearchAlt size={24} className="text-gray-400" />
                <input
                    type="text"
                    placeholder="SEARCH PROJECTS"
                    className="bg-transparent py-2 focus:outline-none"
                />
            </div>
            {/* Dark mode toggler */}
            <div>
                <Switch
                    checked={theme}
                    onChange={setTheme}
                    className={`relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 ${
                        theme ? "bg-teal-900" : "bg-teal-700"
                    }`}
                >
                    <span
                        aria-hidden="true"
                        className={`pointer-events-none inline-block h-[27px] w-[27px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                            theme ? "translate-x-7" : "translate-x-0"
                        }`}
                    />
                </Switch>
            </div>
        </nav>
    );
}
export default Navbar;
