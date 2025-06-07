import { ApiParams } from "@/utils/api";
import { LoginWithEmailPassword } from "../types/LoginWithEmailPassword";
import { LoginWithGoogle } from "../types/LoginWithGoogle";
import { RegisterCheckEmail } from "../types/RegisterCheckEmail";
import { Register } from "../types/Register";
import { LoginWithCoffWallet } from "../types/LoginWithCoffWallet";

export type ILoginInParams = (
  | LoginWithEmailPassword
  | LoginWithGoogle
  | LoginWithCoffWallet
) &
  ApiParams;
export type IRegisterParams = (RegisterCheckEmail | Register) & ApiParams;

export interface ISendOTPParams extends ApiParams {
  email: string;
}

export interface IVerifyOTPParams extends ApiParams {
  refId: string;
  otp: string;
}

export interface ICheckDuplicateUserParams extends ApiParams {
  email: string;
}
