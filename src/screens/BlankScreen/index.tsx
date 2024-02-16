import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { useEffect } from 'react';

type Props = NativeStackScreenProps<RootStackParamList, 'Blank'>

export function BlankScreen({ navigation, route }: Props) {
    const { userToken, setUserToken } = route.params;

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Home', { userToken, setUserToken });
        }, 100);
    });

    return (<></>);
}