import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as actions from './actions';

import { styles } from './styles';
import { RootStackParamList } from '../../types/types';
import { SignIn } from './types';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>

export function SignInScreen({ navigation, route }: Props) {
    const { setUserToken } = route.params;
    const [error, setError] = useState('');
    const [data, setData] = useState<SignIn>({
        email: "",
        password: ""
    });

    const goToSignUp = () => {
        navigation.navigate('SignUp', { setUserToken });
    }

    const handleInputChange = (key: string, value: string) => {
        setData(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const handleSignIn = async () => {
        await actions.signUp(data, setError, setUserToken)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Fazer login</Text>

            {error &&
                <Text style={styles.error}>{error}</Text>
            }

            <TextInput style={styles.input} placeholder='Email' value={data.email} onChangeText={(t) => handleInputChange('email', t)} />
            <TextInput style={styles.input} placeholder='Senha' value={data.password} onChangeText={(t) => handleInputChange('password', t)} />

            <TouchableOpacity style={styles.button} onPress={handleSignIn} >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.footer}>
                <Text style={styles.registerText}>
                    Não possui uma conta?
                </Text>
                <TouchableOpacity onPress={goToSignUp}>
                    <Text style={styles.registerTextInside}> Registre-se aqui</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}