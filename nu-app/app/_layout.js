import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="App" options={{ headerShown: false }} />
      <Stack.Screen name="FazerPix" options={{ title: 'Fazer Pix', tabBarStyle: { display: 'none' }, headerShown: false }} />
      <Stack.Screen name="Pagar" options={{ title: 'Pagar', tabBarStyle: { display: 'none' }, headerShown: false  }} />
      <Stack.Screen name="Transferir" options={{ title: 'Transferir', tabBarStyle: { display: 'none' }, headerShown: false  }} />
      <Stack.Screen name="Depositar" options={{ title: 'Depositar', tabBarStyle: { display: 'none' }, headerShown: false }} />
    </Stack>
  );
}
