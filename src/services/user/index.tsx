import { api } from "../../configs/api"
import type { PayloadLoginUserRequest } from "./DTO"

export const postUserByLogin = async (payload: PayloadLoginUserRequest):Promise<> => {
    try{
        const response = await api.post("/login");
    }catch(e){
        throw e;
    }
};