import { createContext, useReducer } from "react";
import {
  UserReducer,
  IUserState,
  initialUserState,
} from "../reducers/UserReducer";

export const UserContext = createContext<{
  userState: IUserState;
  userDispatch: React.Dispatch<any>;
} | null>(null);

export const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [userState, userDispatch] = useReducer(UserReducer, {initialUserState})

  return (
    <UserContext.Provider
      value={{
        userState,
        userDispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserConsumer = UserContext.Consumer;
