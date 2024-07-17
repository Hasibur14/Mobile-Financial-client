import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({ path, ...props }) => {
    const token = localStorage.getItem('token');

    return token ? (
        <Route {...props} path={path} />
    ) : (
        <Navigate to="/signIn" replace state={{ from: path }} />
    );
};

export default PrivateRoute;
