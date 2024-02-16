import { View, Text } from 'react-native';

import { styles } from './styles';
import { Action } from '../Action';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';

import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function Actions({ navigation, route }: Props) {
    const { userToken, setUserToken } = route.params;

    const goToDepositScreen = () => {

    }

    const goToTransferScreen = () => {
        navigation.navigate('Transfer', { userToken, setUserToken });
    }

    const goToUserInvestmentsScreen = () => {
        navigation.navigate('UserInvestments', { userToken, setUserToken })
    }

    return (
        <>
            <Text style={styles.label}>Ações</Text>

            <View style={styles.buttons}>
                <Action text='Depósito' onPress={goToDepositScreen}>
                    <FontAwesome6 name="money-bill-wave" size={40} color="white" />
                </Action>

                <Action text='Transferência' onPress={goToTransferScreen}>
                    <MaterialIcons name="pix" color="#fff" size={50}></MaterialIcons>
                </Action>

                <Action text='Investimentos' onPress={goToUserInvestmentsScreen}>
                    <FontAwesome name="dollar" size={44} color="#fff" />
                </Action>
            </View>
        </>
    );
}