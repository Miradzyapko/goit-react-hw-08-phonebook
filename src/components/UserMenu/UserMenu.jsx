import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operatios';
import { useAuth } from '../../components/hooks/useAuth';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div >
      <p >Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
