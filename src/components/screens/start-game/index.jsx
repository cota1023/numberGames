import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import {Card, Header} from '../../../components'
import { styles } from './styles';

const StartGame = () => {
  return (
    <View style={styles.container}>
      <Header title="Adivina el número" />
      <Text style={styles.title}>Comenzar el juego</Text>
      <Card style={styles.card}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Elija un número</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={styles.buttonContainer}>
          <Button title="Confirmar" onPress={() => null} color="green" />
          <Button title="Limpiar" onPress={() => null} color="red" />
        </View>
      </Card>
      
    </View>
  );
};

export default StartGame;
