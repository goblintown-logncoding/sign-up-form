import { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        // console.log(searchParams);
        const params = new URLSearchParams(searchParams);
        if (params.get("isRedirect") === "true") {
            navigate("/sign-up");
        }
    }, []);

    return (
        <>
            Home
            <Link to="/sign-up" >Sign Up</Link>
        </>
    )
}

export default Home;