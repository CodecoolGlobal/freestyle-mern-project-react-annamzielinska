import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Coctail() {
    const { coctailId } = useParams()
    useEffect(() => {
        fetch()
        console.log(coctailId)
    }, []);

    return (
        <div>
            <Coctail />
        </div>
    );
}

export default Coctail;
