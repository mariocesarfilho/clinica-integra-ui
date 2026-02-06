export interface PayloadLoginUserRequestDTO {
    email: string;
    password: string;
};

export interface PayloadLoginUserResponseDTO {
    token: string;
};

export interface PayloadLoginUserReturnDTO {
    success: boolean;
    message: string;
    data: PayloadLoginUserResponseDTO | null;
};