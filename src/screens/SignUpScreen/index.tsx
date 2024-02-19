import React, { useState } from 'react';
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as actions from './actions';

import { styles } from './styles';
import { SignUp } from './types';
import { RootStackParamList } from '../../types/types';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Footer } from '../../components/Footer';
import { Title } from '../../components/Title';

type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>

export function SignUpScreen({ navigation, route }: Props) {
    const { setUserToken } = route.params;
    const [data, setData] = useState<SignUp>({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignUp = () => {
        actions.signUp(data, setError, route.params?.setUserToken, setLoading);
    }

    const goToSignIn = () => {
        navigation.navigate('SignIn', { setUserToken });
    }

    const handleInputChange = (key: string, value: string) => {
        setError('');

        if (key == 'phone') value = value.replace(/[^0-9]/g, '');

        setData(prev => ({
            ...prev,
            [key]: value
        }));
    }

    return (
        <View style={styles.container}>
            {!loading &&
                <>
                    <Title text='Registrar' />

                    {error && <ErrorMessage message={error} />}

                    <Input placeHolder='Nome' keyBoardType='default' value={data.name} valueKey='name' onChangeText={handleInputChange} />
                    <Input placeHolder='Email' keyBoardType='email-address' value={data.email} valueKey='email' onChangeText={handleInputChange} />
                    <Input placeHolder='Número de Telefone' keyBoardType='phone-pad' value={data.phone} valueKey='phone' onChangeText={handleInputChange} />
                    <Input placeHolder='Senha' keyBoardType='default' value={data.password} password valueKey='password' onChangeText={handleInputChange} />
                    <Input placeHolder='Confirme a senha' keyBoardType='default' value={data.confirmPassword} password valueKey='confirmPassword' onChangeText={handleInputChange} />

                    <Button text='Criar conta' onPress={handleSignUp} />

                    <Footer text='Já possui uma conta?' linkText='Entre aqui' onPress={goToSignIn} />
                </>
            }
        </View>
    );
}