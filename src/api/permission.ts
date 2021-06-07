import request from "../servers/http";

export const getAllPermission = () => {
  return request.get("/admin/permission/list");
};
export const getAdminPermissionList = () => {
  return request.get("/admin/admin/permission");
};
