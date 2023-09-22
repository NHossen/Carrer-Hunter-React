import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oops Somthing Wrong</h2>
            <Link to='/'><button className="btn btn-error">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;