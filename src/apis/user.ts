import axios from "axios";
import "@/mock/index";

// 用户角色身份
export type UserRoleType = "user" | "admin";

// 返回
export interface GetUserRoleRes {
  userType: UserRoleType;
}

// 获取用户角色身份
export const getUserRole = async () => {
  return axios.get<GetUserRoleRes>("/api/role");
};
