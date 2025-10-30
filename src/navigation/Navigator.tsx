import { NavigationContainer } from "@react-navigation/native";
import Pokedex from "../screens/Pokedex";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetails from "../screens/PokemonDetails";
import { formatPokemonName } from "../utils/formatPokemonName";

export type RootStackParamList = {
  Pokedex: undefined;
  PokemonDetails: { name: string; url: string };
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
          options={({ route }) => ({
            title: formatPokemonName(route.params.name),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}