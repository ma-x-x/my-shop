import request from "../servers/http";

export const login = (data) => {
  return request.post("/admin/login", data);
};
export const getAdminInfo = () => {
  return request.get("/admin/admin/info");
};
