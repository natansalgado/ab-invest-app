import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { Button } from '../Button';

export function History() {

  const goToDepositsHistoryScreen = () => {
    
  }

  const goToTransfersHistoryScreen = () => {

  }

  return (
    <>
      <Text style={styles.label}>Ver históricos</Text>

      <View style={styles.buttons}>
        <Button text='Histórico de depósitos' onPress={goToDepositsHistoryScreen} />
        <Button text='Histórico de transferências' onPress={goToTransfersHistoryScreen} />
      </View>
    </>
  );
}