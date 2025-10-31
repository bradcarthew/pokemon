import { StatusBar } from 'expo-status-bar';
import { View, FlatList, ListRenderItem, ActivityIndicator } from 'react-native';
import { styles } from './Pokedex.styles';
import { PokemonCard } from '@components/PokemonCard';
import { usePokemonList } from '@services/api/hooks/usePokemonList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pokemon } from '../../types/pokemon';
import { RootStackParamList } from '@/app/navigation/types';
import { LoadingIndicator } from '@/components/LoadingIndicator';

type PokedexScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Pokedex'>;

export default function Pokedex() {
  const navigation = useNavigation<PokedexScreenNavigationProp>();

  const renderItem: ListRenderItem<Pokemon> = ({ item }) => (
    <PokemonCard 
      name={item.name} 
      onPress={() => navigation.navigate('PokemonDetails', { name: item.name, url: item.url })}
    />
  );
  
  const {
    data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = usePokemonList();

  const pokemon = data?.pages.flatMap((page) => page.results) ?? [];

  if (isLoading) {
    return (
      <LoadingIndicator />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemon}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        style={styles.list}
        onEndReached={() => hasNextPage && fetchNextPage()}
        onEndReachedThreshold={0.4}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator style={styles.fetchingIndicator} /> : null
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}