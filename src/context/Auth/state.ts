import type { Reducer } from "react";
import type { Action, ActionsState, State } from "./types";

export const initialState: State = {
  user: null,
  loading: true,
  error: null,
  status: 'unauthenticated'
};

export const initialActionsState: ActionsState = {
  dispatch: () => {},
  signUp: async () => {},
  signIn: async () => {},
  signInWithGoogle: async () => {},
  signOut: async () => {},
};

export const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null, status: 'loading' };
    case "LOGOUT_SUCCESS":
      return { user: null, loading: false, error: null, status: 'unauthenticated' };
    case "LOGOUT_ERROR":
      console.error("LOGOUT_ERROR: " + action.payload);
      return { ...state, loading: false, error: action.payload };
    case "LOGIN_SUCCESS":
      return { user: action.payload, loading: false, error: null, status: 'authenticated' };
    case "LOGIN_ERROR":
      console.error("LOGIN_ERROR: " + action.payload.stack);
      return { ...state, loading: false, error: action.payload };
    case "REGISTER_SUCCESS":
      return { user: action.payload, loading: false, error: null, status: 'authenticated' };
    case "REGISTER_ERROR":
      console.error("REGISTER_ERROR: " + action.payload);
      return { ...state, loading: false, error: action.payload };
    default:
      throw Error("NOT_IMPLEMENTED");
  }
};
