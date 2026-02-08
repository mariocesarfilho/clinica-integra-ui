import { isAxiosError } from "axios";

import type { PayloadLoginUserRequestDTO, PayloadLoginUserResponseDTO, PayloadLoginUserReturnDTO } from "./DTO"
import api from "../../configs/api";

export const postUserByCreateAccount = async () => {
    try{
        const response = await api.post('');
    }catch(e){
        throw e;
    }
}

export const postUserByLogin = async (payload: PayloadLoginUserRequestDTO):Promise<PayloadLoginUserReturnDTO> => {
    try{
        const response = await api.post<PayloadLoginUserResponseDTO>('/sessions', payload);

        console.log(response);
        console.log("------");
        console.log(response.data);

        return {
            success: true,
            message: "Login efetuado com sucesso!",
            data: response.data,
        };
    }catch(error){
        if(isAxiosError(error)) {
            const backendMessage = 
                error.response?.data?.error || "Erro ao efetuar login";
                return {
                    success: false,
                    message: backendMessage,
                    data: null,
                };
        }
        return {
            success: false,
            message: "Erro! Ao efetuar login!",
            data: null
        }
    }
};