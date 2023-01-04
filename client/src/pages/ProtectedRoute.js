import { useUserContext } from '../context/user/user.context';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  if (user) {
    return children;
  } else {
    navigate('/');
  }
};

export default ProtectedRoute;
