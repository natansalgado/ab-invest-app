import { Dispatch, SetStateAction } from "react";

export interface UserToken {
    userToken: string;
    setUserToken: Dispatch<SetStateAction<string>>;
}

interface SetUserToken {
    setUserToken: Dispatch<SetStateAction<string>>;
}

interface Transfer {
    senderKey: string,
    receiverKey: string,
    value: number,
    userToken: string
}

interface TransferDone {
    senderName: string;
    senderKey: string;
    receiverName: string;
    receiverKey: string;
    value: number;
    date: Date;
}

export type RootStackParamList = {
    LogOut: SetUserToken;
    SignIn: SetUserToken;
    SignUp: SetUserToken;
    Home: UserToken;
    Transfer: UserToken;
    TransferDone: TransferDone;
    UserInvestments: UserToken;
    Investments: UserToken;
    Investment: { investment: Investment, userToken: string, setUserToken: Dispatch<SetStateAction<string>> }
    InvestmentDone: { error?: string, userToken: string, setUserToken: Dispatch<SetStateAction<string>> }
}