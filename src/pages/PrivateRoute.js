import {Navigate} from "react-router-dom";

// function PrivateRoute({children, isAuthenticated}) {
function PrivateRoute({component: PrivateComponent, isAuthenticated}) {

    return isAuthenticated ? <PrivateComponent /> : <Navigate to="/" />





    // return (
    //     <>
    //         {children}
    //     </>
    //
    // )
    // // return isAuthenticated ? children : <Navigate to="/" />;
}

export default PrivateRoute;