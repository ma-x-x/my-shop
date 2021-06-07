import request from "../servers/http";

export const getAdminInfo = (data: any) => {
  return request.get("/admin/admin/info", data);
};
export const getAdminList = (page: number = 1) => {
  return request.get("/admin/admin/list", { page: page });
};
export const deleteAdmin = (adminId: number) => {
  return request.delete("/admin/admin/delete/" + adminId, "delete");
};
export const updateAdmin = (adminId: number, data: any) => {
  return request.put("/admin/admin/update/" + adminId, data);
};

export const addAdmin = (admin: any) => {
  return request.post("/admin/admin/add", admin);
};
