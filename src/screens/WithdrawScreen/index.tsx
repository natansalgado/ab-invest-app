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
import { ConfirmWithdraw } from '../../components/ConfirmWithdraw';

type Props = NativeStackScreenProps<RootStackParamList, 'Withdraw'>

export function WithdrawScreen({ navigation, route }: Props) {
  const { userInvestment, userToken, setUserToken } = route.params;

  const [userData, setUserData] = useState<UserData | null>(null);
  const [accountData, setAccountData] = useState<AccountData | null>(null);
  const [value, setValue] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const handleChangeValue = (key: string, value: string) => {
    value = value.replace(/[^0-9]/g, '');
    setValue(Number((Number(value) / 100).toString()));
  }

  const handleConfirm = () => {
    if (!userInvestment) return;

    actions.confirmWithdraw(userToken, userInvestment.id, value, navigation);
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
  }, []);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {userData && accountData && userInvestment ?
        <>
          <Text style={styles.label}>Saldo atual do investimento</Text>
          <Text style={[styles.value, value > userInvestment.balance && styles.unavailable]}>{format(userInvestment.balance)}</Text>

          <Text style={styles.label}>Valor que deseja sacar</Text>
          <Input value={format(value)} keyBoardType='numeric' valueKey='' unavailable={value > userInvestment.balance} onChangeText={handleChangeValue} />

          <TouchableOpacity onPress={() => setValue(userInvestment.balance)}>
            <Text style={styles.link}>Sacar tudo</Text>
          </TouchableOpacity>

          {(userInvestment.balance - value) == 0 &&
            <Text style={styles.warning}>Após o saque total o investimento será excluído!</Text>
          }

          <Modal visible={modalOpen}>
            <ConfirmWithdraw userInvestment={userInvestment} value={value} confirm={handleConfirm} cancel={() => setModalOpen(false)} />
          </Modal>

          <Button text='Continuar' disabled={!value || (new Date() < new Date(userInvestment.endDate))} onPress={() => { setModalOpen(true) }} />
        </>
        :
        <ErrorMessage message='Erro ao tentar fazer o saque. Tente novamente mais tarde' />
      }
    </ScrollView>
  );
}