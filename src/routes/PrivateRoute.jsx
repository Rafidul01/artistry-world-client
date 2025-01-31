import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if(loading){
        return <div className='flex justify-center items-center min-h-[calc(100vh-390px)]'>
            <div><span className="loading loading-infinity w-32 bg-[#973E12]"></span></div>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;