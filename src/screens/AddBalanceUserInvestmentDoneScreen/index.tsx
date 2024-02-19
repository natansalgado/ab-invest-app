import { View, Text } from 'react-native';

import { styles } from './styles';
import { Button } from '../../components/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { ErrorMessage } from '../../components/ErrorMessage';

type Props = NativeStackScreenProps<RootStackParamList, 'AddBalanceUserInvestmentDone'>;

export function AddBalanceUserInvestmentDoneScreen({ navigation, route }: Props) {
    const { userToken, setUserToken, error } = route.params;

    const goUserInvestmentsScreen = () => {
        navigation.navigate('UserInvestments', { userToken, setUserToken });
    }

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            {!error ?
                <>
                    <Text style={styles.header}>Depósito feito com sucesso!</Text>
                    <Button text='Sair' onPress={goUserInvestmentsScreen} />
                </>
                :
                <>
                    <ErrorMessage message={error} />
                    <Button text='Voltar' onPress={goBack} />
                </>
            }
        </View>
    );
}