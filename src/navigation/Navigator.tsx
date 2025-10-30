import { NavigationContainer } from "@react-navigation/native";
import Pokedex from "../screens/Pokedex";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokedex"
          component={Pokedex}
          options={{ title: 'Pokédex' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}