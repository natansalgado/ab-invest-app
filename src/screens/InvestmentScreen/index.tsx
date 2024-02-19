import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Modal, RefreshControl } from 'react-native';

import { styles } from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import { format } from '../../actions/actions';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Balance } from '../../components/Balance';

import * as actions from './actions';
import { loadInfos } from '../../actions/actions';
import { ErrorMessage } from '../../components/ErrorMessage';
import { InvestmentInfos } from '../../components/InvestmentInfos';
import { ConfirmInvestment } from '../../components/ConfirmInvestment';

type Props = NativeStackScreenProps<RootStackParamList, 'Investment'>

export function InvestmentScreen({ navigation, route }: Props) {
  const { investment, userToken, setUserToken } = route.params;
  const { minValue } = investment;

  const [userData, setUserData] = useState<UserData | null>(null);
  const [accountData, setAccountData] = useState<AccountData | null>(null);
  const [name, setName] = useState('');
  const [value, setValue] = useState(0);
  const [unavailable, setUnavailable] = useState(true);
  const [confirmModel, setConfirmModel] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [example, setExample] = useState('');

  const handleChangeValue = (key: string, value: string) => {
    value = value.replace(/[^0-9]/g, '');
    setValue(Number((Number(value) / 100).toString()));
  }

  const handleChangeName = (key: string, value: string) => {
    setName(value);
  }

  const handleConfirm = () => {
    if (!accountData) return;

    const data: CreateUserInvestment = {
      accountId: accountData.id,
      investmentId: investment.id,
      name,
      initialValue: value
    }

    actions.confirmInvestment(userToken, setUserToken, data, navigation);
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
        setRefreshing(false);
        loadInfos(userToken, setUserToken, setUserData, setAccountData);
    }, 1000);
}, []);

  useEffect(() => {
    loadInfos(userToken, setUserToken, setUserData, setAccountData);
    setExample(actions.getExample());
  }, []);

  useEffect(() => {
    setUnavailable(value > (accountData?.balance || 0))
  }, [value, accountData]);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {userData && accountData ?
        <>
          <InvestmentInfos investment={investment} value={value} />

          <Balance balance={accountData.balance} unavailable={value > accountData?.balance} />

          <Text style={styles.label}>Nome que deseja utilizar</Text>
          <Input placeHolder={`Exemplo: ${example}`} value={name} keyBoardType='default' valueKey='' onChangeText={handleChangeName} />

          <Text style={styles.label}>Valor que deseja investir</Text>
          <Input value={format(value)} keyBoardType='numeric' valueKey='' unavailable={unavailable || (!!value && value < minValue)} onChangeText={handleChangeValue} />

          <View style={styles.links}>
            <TouchableOpacity onPress={() => setValue(minValue)}>
              <Text style={styles.link}>Adicionar mínimo</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setValue(accountData.balance)}>
              <Text style={styles.link}>Adicionar todo meu saldo</Text>
            </TouchableOpacity>
          </View>

          <Modal visible={confirmModel}>
            <ConfirmInvestment investment={investment} value={value} name={name} confirm={handleConfirm} cancel={() => setConfirmModel(false)} />
          </Modal>

          <Button text='Continuar' disabled={unavailable || !value || (!!value && value < minValue) || !name} onPress={() => { setConfirmModel(true) }} />
        </>
        :
        <ErrorMessage message='Erro ao tentar acessar sua conta. Tente novamente mais tarde' />
      }
    </ScrollView>
  );
}