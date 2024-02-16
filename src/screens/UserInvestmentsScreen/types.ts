interface UserInvestment {
    id: number;
    name: string;
    initialValue: number;
    balance: number;
    accountId: number;
    investmentId: number;
    startDate: Date;
    endDate: Date;
    investment: {
        id: number;
        name: string;
        minValue: number;
        minMonths: number;
        annualPercentage: number;
    }
}