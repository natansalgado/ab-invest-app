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

interface Deposit {
    id: number,
    date: Date,
    value: number,
    paymentMethod: string,
    accountId: number,
}

interface Withdraw {
    id: number;
    initialValue: number;
    balance: number;
    withdrewValue: number;
    accountId: number;
    investmentId: number;
    startDate: Date;
    endDate: Date;
    withdrawDate: Date;
}

interface UserInvestmentScreen extends UserToken {
    id: number;
}

interface AddBalanceUserInvestment extends UserInvestmentScreen {
    userInvestment: UserInvestment | null;
}

interface AddBalanceDone extends UserToken {
    error?: string;
}

export type RootStackParamList = {
    LogOut: SetUserToken;
    SignIn: SetUserToken;
    SignUp: SetUserToken;
    Home: UserToken;
    Deposit: UserToken;
    DepositDone: { error?: string; deposit?: Deposit; };
    Transfer: UserToken;
    TransferDone: TransferDone;
    UserInvestments: UserToken;
    Investments: UserToken;
    Investment: { investment: Investment; userToken: string; setUserToken: Dispatch<SetStateAction<string>>; };
    InvestmentDone: { error?: string; userToken: string; setUserToken: Dispatch<SetStateAction<string>>; };
    UserInvestment: UserInvestmentScreen;
    AddBalanceUserInvestment: AddBalanceUserInvestment;
    AddBalanceUserInvestmentDone: AddBalanceDone;
    Withdraw: { userInvestment: UserInvestment | null; userToken: string; setUserToken: Dispatch<SetStateAction<string>>; };
    WithdrawDone: { error?: string; withdraw?: Withdraw; };
}