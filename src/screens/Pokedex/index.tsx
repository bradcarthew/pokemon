import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, ListRenderItem } from 'react-native';
import { styles } from './Pokedex.styles';
import { Pokemon } from '../../types/pokemon';
import { PokemonCard } from '../../components/PokemonCard';

const pokemonList: Pokemon[] = require('../../../assets/kanto.json');

export default function Pokedex() {
  const renderItem: ListRenderItem<Pokemon> = ({ item }) => (
    <PokemonCard name={item.name} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>
      <FlatList
        data={pokemonList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        style={styles.list}
      />
      <StatusBar style="auto" />
    </View>
  );
}