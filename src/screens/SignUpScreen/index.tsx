import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as actions from './actions';

import { styles } from './styles';
import { SignUp } from './types';
import { RootStackParamList } from '../../types/types';
import { Button } from '../../components/Button';

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

    const handleSignUp = () => {
        actions.signUp(data, setError, route.params?.setUserToken);
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
            <Text style={styles.title}>Registrar</Text>

            {error &&
                <Text style={styles.error}>{error}</Text>
            }

            <TextInput style={styles.input} placeholder='Nome' value={data?.name} onChangeText={(t) => handleInputChange('name', t)} />
            <TextInput style={styles.input} placeholder='Email' value={data?.email} keyboardType='email-address' onChangeText={(t) => handleInputChange('email', t)} />
            <TextInput style={styles.input} placeholder='Numero de telefone' value={data?.phone} keyboardType='phone-pad' maxLength={11} onChangeText={(t) => handleInputChange('phone', t)} />
            <TextInput style={styles.input} placeholder='Senha' value={data?.password} secureTextEntry onChangeText={(t) => handleInputChange('password', t)} />
            <TextInput style={styles.input} placeholder='Confirmar Senha' value={data?.confirmPassword} secureTextEntry onChangeText={(t) => handleInputChange('confirmPassword', t)} />

            <Button text='Entrar' onPress={handleSignUp} />

            <View style={styles.footer}>
                <Text style={styles.registerText}>
                    Já possui uma conta?
                </Text>
                <TouchableOpacity onPress={goToSignIn}>
                    <Text style={styles.registerTextInside}> Entre aqui</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}