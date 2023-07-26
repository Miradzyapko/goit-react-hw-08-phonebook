import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operatios';
import { useAuth } from '../../components/hooks/useAuth';
import { Button} from '../LoginForm/LoginForm.Styled'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div >
      <p >Welcome, {user.name}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
