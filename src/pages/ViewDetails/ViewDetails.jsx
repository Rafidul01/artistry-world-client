// import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const loadedCraft = useLoaderData();
    // const [craft, setCraft] = useState(loadedCraft);
    return (
        <div>
            this is details page of {loadedCraft.item_name}
        </div>
    );
};

export default ViewDetails;