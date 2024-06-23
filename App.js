import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export default function App() {

  const [number, setNumber] = useState(0)

  return (
    <View className='flex-1 items-center justify-center bg-green-700'>
      <Text className='mx-2 text-2xl font-bold text-center text-white'>Charlot  a mis en place Tailwind CSS en React Native</Text>
      <Text className='mt-3 text-white text-2xl'>{number}</Text>
      <Button title='Incrémentation' onPress={() => setNumber(number + 1)}/>
      <StatusBar style="auto" />
    </View>
  );
}