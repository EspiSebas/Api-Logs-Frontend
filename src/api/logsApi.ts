import { apiLogs } from "./api.config";

export const getAllLogs = () => apiLogs.get("/logs/all")

export const deleteLog = (id:number) => apiLogs.delete(`/log/delete/${id}`);

export const updateLog = (id:number,log:any) => apiLogs.patch(`/log/update/${id}`,log)