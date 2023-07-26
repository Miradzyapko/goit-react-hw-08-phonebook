/*import { NavLink } from 'react-router-dom';*/
import { useAuth } from '../../components/hooks/useAuth';
import { Link } from './Navigation.Styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <Link  to="/">
        Home
      </Link>
      {isLoggedIn && (
        <Link to="/contact">
          Contacts
        </Link>
      )}
    </nav>
  );
};
