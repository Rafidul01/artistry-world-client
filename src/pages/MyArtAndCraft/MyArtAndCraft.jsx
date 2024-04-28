import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const MyArtAndCraft = () => {
    const loadedcraft = useLoaderData();
    const [crafts, setCrafts] = useState(loadedcraft);
    return (
        <div>
            this is my art and craft section {crafts.length}
        </div>
    );
};

export default MyArtAndCraft;