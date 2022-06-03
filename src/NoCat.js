import { Link } from "react-router-dom";

const NoCat = () => {
    return (
        <div className="not-found">
            <h2>sorry, we could not find that page</h2>
            <Link to="/">Hone Page</Link>
        </div>

    );
}
 
export default NoCat;