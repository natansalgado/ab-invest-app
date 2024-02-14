import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "../screens/SignInScreen";
import { useState } from "react";
import { SignUpScreen } from "../screens/SignUpScreen";
import { RootStackParamList } from "../types/types";
import { HomeScreen } from "../screens/HomeScreen";
import { TransferScreen } from "../screens/TransferScreen";
import { View } from "react-native";
import { themeColor } from "../screens/HomeScreen/styles";
import { ConfirmTransfer } from "../screens/ConfirmTransfer";

const Stack = createStackNavigator<RootStackParamList>();

export function StackRoute() {
    const { Navigator, Screen } = Stack;
    const [userToken, setUserToken] = useState("");

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            {
                !userToken ?
                    <>
                        <Screen name='SignIn' component={SignInScreen} initialParams={{ setUserToken }} />
                        <Screen name='SignUp' component={SignUpScreen} initialParams={{ setUserToken }} />
                    </>
                    :
                    <>
                        <Screen name='Home' component={HomeScreen} initialParams={{ userToken, setUserToken }} />
                        <Screen name='Transfer' component={TransferScreen} initialParams={{ userToken, setUserToken }}
                            options={{
                                headerShown: true,
                                title: 'Fazer transferência',
                                headerTintColor: '#fff',
                                headerStyle: { backgroundColor: themeColor }
                            }} />
                        <Screen name='ConfirmTransfer' component={ConfirmTransfer}
                            options={{
                                headerShown: true,
                                title: 'Confirmar transferência',
                                headerTintColor: '#fff',
                                headerStyle: { backgroundColor: themeColor }
                            }} />
                    </>
            }
        </Navigator>
    );
}