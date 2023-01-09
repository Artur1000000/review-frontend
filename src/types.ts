export interface IField {
    name?: string,
    label: string,
    type?: string,
    id: string,
    error?: boolean,
    helperText?: string,
    register?: any,
    required: boolean,
    icon?: any
};

export interface ILoaderProps {
    children: JSX.Element,
    status: string | null,
}
export type FormInputs = {
    email: string,
    password?: string,
    userName?: string,
};

export interface AuthFormProps {
    title: string,
    titleButton: string,
    userName?: boolean,
    pass?: boolean,
    children?: JSX.Element,
    onSubmit: (data: any) => void,
    status: string | null,
    t?:any
}
export interface IUserDataSend {
    email: string,
    password: string,
}
export interface IAuthUser {
    email: string,
    id: string,
    status: boolean,
    token: string,
    userName: string,
    __v: number,
}
export interface IInitialStateAuth {
    data: null | IAuthUser,
    status: null | string,
    isLoading: boolean,
    message: null | string,
};
export interface IGetStatusProps {
    prop: string | boolean;
    status: number;
}

