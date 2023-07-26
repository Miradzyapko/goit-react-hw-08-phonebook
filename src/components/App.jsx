import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from '../components/RegisterRoute';
import { refreshUser } from '../redux/auth/operatios';
import { useAuth } from '../components/hooks/useAuth';
import HomePage  from '../pages/Home';
import  LoginPage  from '../pages/login';
import RegisterPage from '../pages/Register';
import ContactsPage from 'pages/Contact';
/*
const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/login'));
const ContactsPage = lazy(() => import('../pages/Contact'));*/

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contact" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contact" component={<LoginPage />} />
          }
        />
        <Route
          path="/Contact"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            
          } 
          />
          <Route path='*' element={<Navigate to='/' />}
        />
      </Route>
    </Routes>
    </>
  );
};
