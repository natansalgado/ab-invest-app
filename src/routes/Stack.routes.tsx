import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "../screens/SignInScreen";
import { useState } from "react";
import { SignUpScreen } from "../screens/SignUpScreen";
import { RootStackParamList } from "../types/types";
import { HomeScreen } from "../screens/HomeScreen";

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
                    </>
            }
        </Navigator>
    );
}