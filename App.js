import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import DisplayBlock from './components/DisplayBlock';

export default function App() {
  return (
    <View className="bg-white">
      <View className = "py-20">
      <DisplayBlock/>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}
