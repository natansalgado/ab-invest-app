interface UserInvestment {
    id: number;
    name: string;
    initialValue: number;
    balance: number;
    addedValue: number;
    accountId: number;
    investmentId: number;
    startDate: Date;
    endDate: Date;
    investment: Investment;
}