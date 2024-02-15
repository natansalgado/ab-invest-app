import { View, Image } from 'react-native';

import { styles } from './styles';
import Logo from '../../../assets/AB_LOGO.png';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { Button } from '../../components/Button';

type Props = NativeStackScreenProps<RootStackParamList, 'LogOut'>

export function LogOutScreen({ navigation, route }: Props) {
  const { setUserToken } = route.params

  const goToSignIn = () => {
    navigation.navigate('SignIn', { setUserToken })
  }

  const goToSignUp = () => {
    navigation.navigate('SignUp', { setUserToken })
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />
      <View style={styles.buttons}>
        <Button text='Entrar' onPress={goToSignIn} />
        <Button text='Criar conta' onPress={goToSignUp} />
      </View>
    </View>
  );
}