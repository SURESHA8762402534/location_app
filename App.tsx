import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import { AppProvider } from './src/contexts/AppContext';
import Navigation from './src/navigation/Navigation';
import StatusBarOffset from './src/components/StatusBarOffset';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <StatusBarOffset />
      <AppProvider>
        <Navigation />
      </AppProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
