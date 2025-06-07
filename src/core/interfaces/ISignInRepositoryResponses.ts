import { User } from "../entities/User";

export interface ISignInRepositoryResponses {
  message: string;
  expiresIn: string;
  user: User;
}
