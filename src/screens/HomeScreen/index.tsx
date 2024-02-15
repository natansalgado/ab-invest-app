import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { loadInfos } from '../../actions/actions';

import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { Balance } from '../../components/Balance';
import { Header } from '../../components/Header';
import { Actions } from '../../components/Actions';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export function HomeScreen({ navigation, route }: Props) {
    const { userToken, setUserToken } = route.params;
    const [userData, setUserData] = useState<UserData | null>(null);
    const [accountData, setAccountData] = useState<AccountData | null>(null);

    useEffect(() => {
        loadInfos(userToken, setUserToken, setUserData, setAccountData);
    }, []);

    if (userData == null || accountData == null) return (<></>);

    const goToSettings = () => {
        navigation.navigate('Transfer', { userToken, setUserToken })
    }


    return (
        <>
            <StatusBar style='light' />

            <Header name={userData.name} onPress={goToSettings} />


            <View style={styles.field}>
                <Balance balance={accountData.balance} />
            </View>

            <Actions navigation={navigation} route={route} />
        </>
    );
}