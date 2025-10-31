import { usePokemonDetails } from "@/services/api/hooks/usePokemonDetails";
import { useRoute } from "@react-navigation/native";
import { render } from "@testing-library/react-native";
import PokemonDetails from "..";

jest.mock('@react-navigation/native', () => ({
  useRoute: jest.fn(),
}));
jest.mock('@services/api/hooks/usePokemonDetails');

describe('PokemonDetails Screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows loading indicator when loading', () => {
    (useRoute as jest.Mock).mockReturnValue({ params: { url: 'test-url' } });
    (usePokemonDetails as jest.Mock).mockReturnValue({ isLoading: true });

    const { getByTestId } = render(<PokemonDetails />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders Pokémon details when data is loaded', () => {
    (useRoute as jest.Mock).mockReturnValue({ params: { url: 'test-url' } });
    (usePokemonDetails as jest.Mock).mockReturnValue({
      isLoading: false,
      error: null,
      data: {
        height: 7,
        weight: 69,
        species: { name: 'bulbasaur' },
        abilities: [{ ability: { name: 'overgrow' } }],
        moves: [{ move: { name: 'tackle' } }],
      },
    });

    const { getByText } = render(<PokemonDetails />);
    expect(getByText('Height: 7')).toBeTruthy();
    expect(getByText('Weight: 69')).toBeTruthy();
    expect(getByText('Species: bulbasaur')).toBeTruthy();
    expect(getByText('• overgrow')).toBeTruthy();
    expect(getByText('• tackle')).toBeTruthy();
  });
});