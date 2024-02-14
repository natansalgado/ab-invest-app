import { Dispatch, SetStateAction } from "react";
import { fetchSignUp } from "../../api/signUp";
import { SignUp } from "./types";
import * as sigInActions from '../SignInScreen/actions';

type SetString = Dispatch<SetStateAction<string>>;

export const signUp = async (data: SignUp, setError: SetString, setUserToken: SetString) => {
    const { name, email, phone, password, confirmPassword } = data;

    if (!name) return setError("Digite um nome válido")
    if (!email) return setError("Digite um email válido")
    if (!phone) return setError("Digite um número válido")
    if (!password) return setError("Digite uma senha válida")
    if (password !== confirmPassword) return setError("Utilize a mesma senha de cima")

    try {
        const response = await fetchSignUp(data);

        if (response.status !== 200) setError(response);

        if (response.status == 200) {
            sigInActions.signIn({ email, password }, setError, setUserToken);
        }
    } catch (error: any) {
        setError("Erro ao tentar acessar o servidor");
    }
}