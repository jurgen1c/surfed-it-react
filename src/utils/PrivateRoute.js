/* eslint-disable */
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const user = useSelector(state => state.user.user);
  return (
    <Route
      {...rest}
      >
      { user === true ? (children) : <Redirect to="/" />}
      </Route>

  );
};

export default PrivateRoute;
