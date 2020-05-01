import React from "react";
function Protected({ authenticated, children, ...rest }) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          authenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default Protected