// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MyStackNav from './routes/MyStackNav';


export default function App() {
  return (
    <NavigationContainer>
      <MyStackNav />
    </NavigationContainer>
  );
}
