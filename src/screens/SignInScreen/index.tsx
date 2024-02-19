import { useState } from 'react';
import { View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as actions from './actions';

import { styles } from './styles';
import { RootStackParamList } from '../../types/types';
import { SignIn } from './types';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Footer } from '../../components/Footer';
import { Title } from '../../components/Title';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>

export function SignInScreen({ navigation, route }: Props) {
    const { setUserToken } = route.params;
    const [data, setData] = useState<SignIn>({
        email: "",
        password: ""
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const goToSignUp = () => {
        navigation.navigate('SignUp', { setUserToken });
    }

    const handleInputChange = (key: string, value: string) => {
        setError("");
        setData(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const handleSignIn = async () => {
        await actions.signIn(data, setError, setUserToken, setLoading);
    }

    return (
        <View style={styles.container}>
            {!loading &&
                <>
                    <Title text='Fazer Login' />

                    {error && <ErrorMessage message={error} />}

                    <Input placeHolder='Email' value={data.email} keyBoardType='email-address' valueKey='email' onChangeText={handleInputChange} />
                    <Input placeHolder='Senha' value={data.password} keyBoardType='default' valueKey='password' password onChangeText={handleInputChange} />

                    <Button text='Entrar' onPress={handleSignIn} />

                    <Footer text='Não possui uma conta?' linkText='Registre-se aqui' onPress={goToSignUp} />
                </>
            }
        </View>
    );
}