import { useFonts } from 'expo-font';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView } from 'react-native';
import StartGame from './screens/start-game'
import GameScreen from './screens/game-screen';
import { Header } from './components';

import { styles } from './styles';

export default function App() {
  const [userNumber, setUserNumber] = useState('')
  const [loaded] = useFonts({
    'Lato': require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('../assets/fonts/Lato-Light.ttf'),
    'Lato-Italic': require('../assets/fonts/Lato-Italic.ttf'),
  })
  const onStartGame = (selectedValue) => {
    setUserNumber(selectedValue)
  }

  if(!loaded){
    return null
  }

  let content = <StartGame onStartGame={onStartGame} />
  if (userNumber) {
    content = <GameScreen />
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Adivina el número" />
      {content}
    </SafeAreaView>
  );
}
