import { useUserContext } from '../context/user/user.context';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate to='/' replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
