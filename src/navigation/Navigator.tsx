import { NavigationContainer } from "@react-navigation/native";
import Pokedex from "../screens/Pokedex";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetails from "../screens/PokemonDetails";

export type RootStackParamList = {
  Pokedex: undefined;
  PokemonDetails: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pokedex"
          component={Pokedex}
          options={{ title: 'Pokédex' }}
        />
        <Stack.Screen 
          name="PokemonDetails" 
          component={PokemonDetails} 
          options={{ title: 'Pokémon Details'}}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}