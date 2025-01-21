import { NavLink } from "react-router-dom";

function NotFound() {
    return ( 
        <>
           <div className="container p-5 my-5">
                <div className="row text-center">
                    <h1 className="mt-5 fs-2">404 Not Found</h1>
                    <p>Sorry, The page you are looking for does not exist</p>
                    <NavLink className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%", margin : "0 auto"}} to="/">Go to Homepage</NavLink>
                </div>
            </div>
        </>
     );
}

export default NotFound;