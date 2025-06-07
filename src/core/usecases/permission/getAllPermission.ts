import { PermissionRepository } from "@/data/repositories/PermissionRepository";

export const getAllPermission = async () => {
  return await PermissionRepository.getAll();
};
