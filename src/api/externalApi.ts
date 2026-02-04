import { externalApi } from "./api.config";

export const getUser = () => externalApi.get("/users");

export const getPost = () => externalApi.get("/posts");

export const getAlbumByUser = (userId:number) => externalApi.get("albums",{params:{ userId } });