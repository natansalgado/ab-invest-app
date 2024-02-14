import { Dispatch, SetStateAction } from "react";

interface UserToken {
    userToken: string;
    setUserToken: Dispatch<SetStateAction<string>>;
}

interface SetUserToken {
    setUserToken: Dispatch<SetStateAction<string>>;
}

export type RootStackParamList = {
    SignIn: SetUserToken;
    SignUp: SetUserToken;
    Home: UserToken;
    Transfer: UserToken;
    ConfirmTransfer: {
        senderKey: string,
        receiverKey: string,
        value: number,
        userToken: string
    }
}