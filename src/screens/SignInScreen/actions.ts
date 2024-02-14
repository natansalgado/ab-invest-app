import { Dispatch, SetStateAction } from "react";
import { fetchSignIn } from "../../api/signIn";
import { SignIn } from "./types";

type SetString = Dispatch<SetStateAction<string>>;

export const signIn = async (data: SignIn, setError: SetString, setUserToken: SetString) => {
    const { email, password } = data;

    if (!email) return setError("Digite um email válido")
    if (!password) return setError("Digite uma senha válida")

    try {
        const response = await fetchSignIn(data);

        if (response.status !== 200) setError(response);
        
        if (response.status == 200) setUserToken(response.data.token);
    } catch (error: any) {
        setError("Erro ao tentar acessar o servidor");
    }
}