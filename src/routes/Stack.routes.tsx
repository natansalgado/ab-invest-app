import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "../screens/SignInScreen";
import { useState } from "react";
import { SignUpScreen } from "../screens/SignUpScreen";
import { RootStackParamList } from "../types/types";
import { HomeScreen } from "../screens/HomeScreen";
import { TransferScreen } from "../screens/TransferScreen";
import { ConfirmTransfer } from "../screens/ConfirmTransfer";
import { LogOutScreen } from "../screens/LogOutScreen";
import { themeColor } from "../constants/colors";
import { TransferDoneScreen } from "../screens/TransferDoneScreen";
import { UserInvestmentsScreen } from "../screens/UserInvestmentsScreen";
import { InvestmentsScreen } from "../screens/InvestmentsScreen";

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
                        <Screen name='Transfer' component={TransferScreen} initialParams={{ userToken, setUserToken }} options={{ title: 'Fazer transferência' }} />
                        <Screen name='ConfirmTransfer' component={ConfirmTransfer} options={{ title: 'Confirmar transferência' }} />
                        <Screen name='TransferDone' component={TransferDoneScreen} options={{ title: 'Transferência concluída' }} />
                        <Screen name='UserInvestments' component={UserInvestmentsScreen} options={{ title: 'Meus investimentos' }} />
                        <Screen name='Investments' component={InvestmentsScreen} options={{ title: 'Investimentos disponíveis' }} />
                    </>
            }
        </Navigator>
    );
}