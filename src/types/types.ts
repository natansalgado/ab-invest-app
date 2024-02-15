import { Dispatch, SetStateAction } from "react";

export interface UserToken {
    userToken: string;
    setUserToken: Dispatch<SetStateAction<string>>;
}

interface SetUserToken {
    setUserToken: Dispatch<SetStateAction<string>>;
}

interface ConfirmTransfer {
    senderKey: string,
    receiverKey: string,
    value: number,
    userToken: string
}

export type RootStackParamList = {
    LogOut: SetUserToken;
    SignIn: SetUserToken;
    SignUp: SetUserToken;
    Home: UserToken;
    Transfer: UserToken;
    ConfirmTransfer: ConfirmTransfer;
}