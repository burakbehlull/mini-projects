import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import Main from './src';

export default function App() {
  return (
    <SafeAreaView>
      <Main />
      <StatusBar style='auto' />
    </SafeAreaView>
  );
}
