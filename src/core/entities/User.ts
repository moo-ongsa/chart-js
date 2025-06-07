import { UserRole } from "../types/UserRole";

export interface User {
  id: number;
  email: string;
  role: UserRole;
  fullName: string;
}
