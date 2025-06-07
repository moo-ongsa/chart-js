import { PermissionRepository } from "@/data/repositories/PermissionRepository";

export const unlockPermissionById = async (id: number) => {
  return await PermissionRepository.postPurchase({
    permissionId: id,
  });
};
