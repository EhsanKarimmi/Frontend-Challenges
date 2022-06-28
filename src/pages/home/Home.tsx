import { useState } from "react";
import Navbar from "../../components/Navbar";

function Home() {
    const [search, setSearch] = useState<string | null>(null);
    return (
        <div className="w-full h-screen bg-[#EEEEEE] dark:bg-blue-900 p-2">
            {/* Home Header  */}
            <header>
                <Navbar search={search} setSearch={setSearch} />
            </header>
            {/* Home Content */}
            <section>Hello</section>
        </div>
    );
}
export default Home;
