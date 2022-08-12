import React from 'react';
import { SafeAreaView } from 'react-native';

import StartGame from './components/screens/start-game';
import { styles } from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StartGame/>
    </SafeAreaView>
  );
}
