import { Dispatch, SetStateAction } from "react";
import { fetchSignIn } from "../../api/signIn";
import { SignIn } from "./types";

type SetString = Dispatch<SetStateAction<string>>;

export const signIn = async (data: SignIn, setError: SetString, setUserToken: SetString, setLoading: Dispatch<SetStateAction<boolean>>) => {
    const { email, password } = data;

    if (!email) return setError("Digite um email válido")
    if (!password) return setError("Digite uma senha válida")

    setLoading(true);

    try {
        const response = await fetchSignIn(data);

        if (response.status !== 200) {
            setError(response);
            setLoading(false);
        }

        if (response.status == 200) setUserToken(response.data.token);
    } catch (error: any) {
        setError("Erro ao tentar acessar o servidor");
    }
}