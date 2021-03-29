/* eslint-disable */
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({
  component: Component,
  user: user,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (user !== null) {
          return <Component user={user}/>;
        } else {
          return (
            <Redirect to={{ pathname: "/users/sign_in", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default PrivateRoute;
