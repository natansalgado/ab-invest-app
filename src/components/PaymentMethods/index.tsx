import React, { Dispatch, SetStateAction } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

interface Props {
  select: string;
  setSelect: Dispatch<SetStateAction<string>>
}

export function PaymentMethods({ select, setSelect }: Props) {
  const handleChangePayment = (method: string) => {
    setSelect(method);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.card, select == 'Cartão de Crédito' && styles.selectCard]}
        onPress={() => handleChangePayment('Cartão de Crédito')}
      >
        <Text style={[styles.text, select == 'Cartão de Crédito' && styles.selectText]}>Cartão</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card, select == 'Boleto' && styles.selectCard]}
        onPress={() => handleChangePayment('Boleto')}
      >
        <Text style={[styles.text, select == 'Boleto' && styles.selectText]}>Boleto</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.card, select == 'Pix' && styles.selectCard]}
        onPress={() => handleChangePayment('Pix')}
      >
        <Text style={[styles.text, select == 'Pix' && styles.selectText]}>Pix</Text>
      </TouchableOpacity>
    </View>
  );
}