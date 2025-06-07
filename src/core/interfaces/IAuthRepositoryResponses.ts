import { User } from "../entities/User";

export interface ILoginResponses {
  message: string;
  expiresIn: string;
  user: User;
}

export interface IRegisterResponses {
  message: string;
  user: User;
}

export interface ISendOTPResponses {
  refId: string;
}

export interface IVerifyOTPResponses {
  message: string;
}
