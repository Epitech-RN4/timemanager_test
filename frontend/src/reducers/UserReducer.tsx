export const initialUserState = {
  user: null,
  mail:"test@mail.com",
  role:null,
  isLogged: false,
  picture:null,
};

export interface IUserState{
  user: string;
  mail: string;
  role: string;
  isLogged: boolean;
  picture:string;
}

export interface IUserAction{
  type:string,
  payload:{[key:string]:string}
}

export const UserReducer = (
  state: IUserState,
  action: IUserAction
) => {
  const {type, payload} = action;
  switch (type) {
    case "SET_USER":
      return {
        ...state,
        user: payload.username,
        mail: payload.email,
        isLogged: true,
      };
    case "LOGOUT":
      return {
        user:null,
        mail:null,
        role:null,
        isLogged:false
      };
    default:
      return state;
  }
};
