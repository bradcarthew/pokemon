import { View, Text, Alert, ActivityIndicator, ScrollView } from "react-native";
import { styles } from "./PokemonDetails.styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/Navigator";
import { usePokemonDetails } from "../../services/api/hooks/usePokemonDetails";

type PokemonDetailsRouteProp = RouteProp<RootStackParamList, 'PokemonDetails'>;

export default function PokemonDetails() {
  const route = useRoute<PokemonDetailsRouteProp>();
  const { url } = route.params;
  const { data, isLoading, error } = usePokemonDetails(url);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    Alert.alert("Error", "Failed to load Pokémon details");
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.stat}>Height: {data?.height}</Text>
      <Text style={styles.stat}>Weight: {data?.weight}</Text>
      <Text style={styles.stat}>Species: {data?.species?.name}</Text>
      <Text style={styles.section}>Abilities</Text>
      {data?.abilities.map((a) => (
        <Text key={a.ability.name} style={styles.subtext}>• {a.ability.name}</Text>
      ))}
      <Text style={styles.section}>Moves</Text>
      {data?.moves.map((m) => (
        <Text key={m.move.name} style={styles.subtext}>• {m.move.name}</Text>
      ))}
    </ScrollView>
  )
}