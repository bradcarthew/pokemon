import { Text, StyleSheet, Pressable } from 'react-native';

interface PokemonCardProps {
  name: string;
  onPress?: () => void;
}

export const PokemonCard = ({ name, onPress }: PokemonCardProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && { opacity: 0.7, transform: [{ scale: 0.98 }] },
      ]}
    >
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};

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