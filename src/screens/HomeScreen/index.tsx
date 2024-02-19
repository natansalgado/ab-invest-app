import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { View, ScrollView, SafeAreaView, RefreshControl } from 'react-native';
import { loadInfos } from '../../actions/actions';

import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { Balance } from '../../components/Balance';
import { Header } from '../../components/Header';
import { Actions } from '../../components/Actions';
import { History } from '../../components/History';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export function HomeScreen({ navigation, route }: Props) {
    const { userToken, setUserToken } = route.params;
    const [userData, setUserData] = useState<UserData | null>(null);
    const [accountData, setAccountData] = useState<AccountData | null>(null);
    const [refreshing, setRefreshing] = useState(false)

    useEffect(() => {
        loadInfos(userToken, setUserToken, setUserData, setAccountData);
    }, []);

    const goToSettings = () => {
        navigation.navigate('Transfer', { userToken, setUserToken })
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
            loadInfos(userToken, setUserToken, setUserData, setAccountData);
        }, 1000);
    }, []);

    return (
        <SafeAreaView>
            <StatusBar style='light' />
            <Header name={userData ? userData.name : ''} onPress={goToSettings} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            >

                <View style={styles.field}>
                    <Balance balance={accountData ? accountData.balance : 0} />
                </View>

                <View style={styles.field}>
                    <Actions navigation={navigation} route={route} />
                </View>

                <View style={styles.field}>
                    <History />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}