import React from 'react';
import { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

import {Card, Input,NumberContainer} from '../../components'
import { styles } from './styles';


const StartGame = ({onStartGame}) => {
  const [enteredValue, setEnteredValue] = useState('')
  const [confirmed, setConfirmed] = useState(true)
  const[selectedValue, setSelectedValue] = useState('')
  const onNumberChange = (text)=>{
    setEnteredValue(text.replace(/[^0-9]/g, ''))
  }
  const onResetInput = ()=>{
    setEnteredValue('')
    setConfirmed(false)
    console.warn('Limpio')
    console.warn(confirmed)
  }
  const onConfirmInput =()=>{
    const chooseNumber = parseInt(enteredValue,10)
    if(isNaN(chooseNumber) || chooseNumber<=0 || chooseNumber>99) return;
    setConfirmed(true)
    setSelectedValue(chooseNumber)
    setEnteredValue('')
    console.log('confirm')
    console.warn(chooseNumber)
  }
let confirmedOutput
if(confirmed){
  confirmedOutput=(
    <Card style={styles.summaryContainer}>
      <Text style={styles.summaryText}>Seleccionaste</Text>
      <NumberContainer>{selectedValue}</NumberContainer>
      <Button title='Empezar Juego' onPress={()=>onStartGame(selectedValue)}/>
    </Card>
  )
}

  return (
    <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
          }}>
    <View style={styles.container}>
      <Text style={styles.title}>Comenzar el juego</Text>
      <Card style={styles.card}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Elija un número</Text>
        <Input 
        style={styles.input}
        blurOnSubmit
        autoCapitalization='none'
        autoCorrect='false'
        keyboardType='numeric'
        maxLength={2}
        onChangeText={onNumberChange}
        value={enteredValue} />
      </View>
      <View style={styles.buttonContainer}>
          <Button title="Confirmar" onPress={() => onConfirmInput()} color="green" />
          <Button title="Limpiar" onPress={() => onResetInput()} color="red" />
        </View>
      </Card>
      {confirmedOutput}
    </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGame;
