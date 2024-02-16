import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen/>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
