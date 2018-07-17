export interface Users {
  fullname:string,
  email:string,
 Passsword:string
}
export interface Sidebar {
  error: string;
  sucess:string;

}
export interface message {
  msg: string;

}

export interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}
