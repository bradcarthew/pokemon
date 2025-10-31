import { Text, Alert, ScrollView } from "react-native";
import { styles } from "./PokemonDetails.styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "@app/navigation/types";
import { usePokemonDetails } from "@services/api/hooks/usePokemonDetails";
import { LoadingIndicator } from "@/components/LoadingIndicator";

type PokemonDetailsRouteProp = RouteProp<RootStackParamList, 'PokemonDetails'>;

export default function PokemonDetails() {
  const { params } = useRoute<PokemonDetailsRouteProp>();
  const { url } = params;
  const { data, isLoading, error } = usePokemonDetails(url);

  if (isLoading) {
    return (
      <LoadingIndicator />
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