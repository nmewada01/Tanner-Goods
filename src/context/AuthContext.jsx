import React, { useReducer } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const initialState = {
  isAuth: false,
  token: null,
};
function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        isAuth: true,
        token: action.type,
      };
    }
    case "LOGIN_FAILURE": {
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    }
    case "LOGOUT_SUCCESS": {
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    }
    default: {
      return state;
    }
  }
}

export const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const Load = () => {
    return (
      <div>
        <h1 style={{ fontSize: "300px", textAlign: "right", color: "grey" }}>
          ...Loading
        </h1>
      </div>
    );
  };
  return (
    <AuthContext.Provider
      value={{ state, dispatch, Load, loading, setLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
