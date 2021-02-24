export interface User {
  msg: string;
  data: {
    role: string;
    _id: string;
    name: string;
    email: string;
    createdAt: string;
    __v: number;
  };
}
export interface CurrentUserResponse {
  msg: string;
  data: User;
}

export interface UserLoginResponse {
  msg: string;
  token: string;
}

export interface RegisterUserInfo {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface LoginCreds {
  email: string;
  password: string;
}
