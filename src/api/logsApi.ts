import { apiLogs } from "./api.config";

export const getAllLogs = () => apiLogs.get("/logs/all")

export const deleteLog = (id:number) => apiLogs.delete(`/logs/${id}`);

export const updateLog = (id:number,log:any) => apiLogs.patch(`/logs/${id}`,log)