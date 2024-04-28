import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyArtCard from "./MyArtCard";

const MyArtAndCraft = () => {
    const loadedcraft = useLoaderData();
    const [crafts, setCrafts] = useState(loadedcraft);
    return (
        <div>
            this is my art and craft section {crafts.length}
            <div className="grid grid-cols-3">
                {
                    crafts.map(craft => <MyArtCard key={craft._id} craft={craft} setCrafts={setCrafts} crafts={crafts}></MyArtCard> )
                } 
            </div>
            
        </div>
    );
};

export default MyArtAndCraft;