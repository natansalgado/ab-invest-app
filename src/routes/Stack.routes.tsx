import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "../screens/SignInScreen";
import { useState } from "react";
import { SignUpScreen } from "../screens/SignUpScreen";
import { RootStackParamList } from "../types/types";
import { HomeScreen } from "../screens/HomeScreen";
import { TransferScreen } from "../screens/TransferScreen";
import { LogOutScreen } from "../screens/LogOutScreen";
import { themeColor } from "../constants/colors";
import { TransferDoneScreen } from "../screens/TransferDoneScreen";
import { UserInvestmentsScreen } from "../screens/UserInvestmentsScreen";
import { InvestmentsScreen } from "../screens/InvestmentsScreen";
import { InvestmentScreen } from "../screens/InvestmentScreen";
import { InvestmentDoneScreen } from "../screens/InvestmentDoneScreen";
import { UserInvestmentScreen } from "../screens/UserInvestmentScreen";
import { AddBalanceUserInvestmentScreen } from "../screens/AddBalanceUserInvestmentScreen";
import { AddBalanceUserInvestmentDoneScreen } from "../screens/AddBalanceUserInvestmentDoneScreen";
import { DepositScreen } from "../screens/DepositScreen";
import { DepositDoneScreen } from "../screens/DepositDoneScreen";

const Stack = createStackNavigator<RootStackParamList>();

export function StackRoute() {
    const { Navigator, Screen } = Stack;
    const [userToken, setUserToken] = useState("");

    return (
        <Navigator screenOptions={{
            headerShown: true,
            headerTintColor: '#fff',
            headerStyle: { backgroundColor: themeColor }
        }}>
            {
                !userToken ?
                    <>
                        <Screen name='LogOut' component={LogOutScreen} initialParams={{ setUserToken }} options={{ headerShown: false }} />
                        <Screen name='SignIn' component={SignInScreen} initialParams={{ setUserToken }} options={{ headerShown: false }} />
                        <Screen name='SignUp' component={SignUpScreen} initialParams={{ setUserToken }} options={{ headerShown: false }} />
                    </>
                    :
                    <>
                        <Screen name='Home' component={HomeScreen} initialParams={{ userToken, setUserToken }} options={{ headerShown: false }} />
                        <Screen name='Deposit' component={DepositScreen} options={{ title: 'Fazer Depósito' }} />
                        <Screen name='DepositDone' component={DepositDoneScreen} options={{ title: '' }} />
                        <Screen name='Transfer' component={TransferScreen} options={{ title: 'Fazer Transferência' }} />
                        <Screen name='TransferDone' component={TransferDoneScreen} options={{ title: '' }} />
                        <Screen name='UserInvestments' component={UserInvestmentsScreen} options={{ title: 'Meus Investimentos' }} />
                        <Screen name='Investments' component={InvestmentsScreen} options={{ title: 'Investimentos Disponíveis' }} />
                        <Screen name='Investment' component={InvestmentScreen} options={{ title: 'Investimento' }} />
                        <Screen name='InvestmentDone' component={InvestmentDoneScreen} options={{ title: '' }} />
                        <Screen name='UserInvestment' component={UserInvestmentScreen} options={{ title: 'Meu Investimento' }} />
                        <Screen name='AddBalanceUserInvestment' component={AddBalanceUserInvestmentScreen} options={{ title: 'Adicionar Saldo' }} />
                        <Screen name='AddBalanceUserInvestmentDone' component={AddBalanceUserInvestmentDoneScreen} options={{ title: '' }} />
                    </>
            }
        </Navigator>
    );
}