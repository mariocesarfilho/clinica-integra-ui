import { isAxiosError } from "axios";
import { api } from "../../configs/api"
import type { PayloadLoginUserRequestDTO, PayloadLoginUserResponseDTO, PayloadLoginUserReturnDTO } from "./DTO"

export const postUserByLogin = async (payload: PayloadLoginUserRequestDTO):Promise<PayloadLoginUserReturnDTO> => {
    try{
        const response = await api.post<PayloadLoginUserResponseDTO>("/login", payload);

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
            message: "Erro ao efetuar login",
            data: null
        }
    }
};