import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Home } from './src/screens/Home';
import { Login } from './src/screens/Login';

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Login/>
      {/* <Home/> */}
    </View>
  );
}

