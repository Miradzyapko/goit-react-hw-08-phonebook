/*mport { NavLink } from 'react-router-dom';*/
import { Link } from '../Navigation/Navigation.Styled'
export const AuthNav = () => {
  return (
    <div>
      <Link  to="/register">
        Register
      </Link>
      <Link  to="/login">
        Log In
      </Link>
    </div>
  );
};
