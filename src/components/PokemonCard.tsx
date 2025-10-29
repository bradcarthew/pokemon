import { View, Text, StyleSheet } from 'react-native';

interface PokemonCardProps {
  name: string;
}

export const PokemonCard = ({ name }: PokemonCardProps) => (
  <View style={styles.card}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    marginVertical: 8,
    padding: 16,
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
});