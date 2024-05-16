import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Clock} from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sebastia Pla</Text>
      <StatusBar style="auto" />
      <Clock />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
