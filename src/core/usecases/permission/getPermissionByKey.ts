import { PermissionRepository } from "@/data/repositories/PermissionRepository";
import { PERMISSION } from "@/utils/constants";

export const getPermissionByKey = async (key: keyof typeof PERMISSION) => {
  return {
    id: 1,
    permission: PERMISSION[key],
    price: 9999,
  };
  // return await PermissionRepository.getSpecific({
  //   permission: PERMISSION[key],
  // });
};
