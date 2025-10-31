import { usePokemonList } from "@/services/api/hooks/usePokemonList";
import { useNavigation } from "@react-navigation/native";
import { fireEvent, render } from "@testing-library/react-native";
import Pokedex from "..";

jest.mock('@services/api/hooks/usePokemonList');
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

describe('Pokedex screen (unit)', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useNavigation as jest.Mock).mockReturnValue({ navigate: mockNavigate });
  });

  it('renders loading indicator while data is loading', () => {
    (usePokemonList as jest.Mock).mockReturnValue({
      isLoading: true,
      data: undefined,
    });

    const { getByTestId } = render(<Pokedex />);
    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders a list of Pokémon when data is available', () => {
    (usePokemonList as jest.Mock).mockReturnValue({
      isLoading: false,
      data: {
        pages: [
          {
            results: [
              { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
              { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
            ],
          },
        ],
      },
      fetchNextPage: jest.fn(),
      isFetchingNextPage: false,
      hasNextPage: false,
    });

    const { getByText } = render(<Pokedex />);
    expect(getByText('bulbasaur')).toBeTruthy();
    expect(getByText('charmander')).toBeTruthy();
  });

  it('navigates to PokemonDetails when a card is pressed', () => {
    (usePokemonList as jest.Mock).mockReturnValue({
      isLoading: false,
      data: {
        pages: [
          {
            results: [
              { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
            ],
          },
        ],
      },
      fetchNextPage: jest.fn(),
      isFetchingNextPage: false,
      hasNextPage: false,
    });

    const { getByText } = render(<Pokedex />);
    fireEvent.press(getByText('pikachu'));

    expect(mockNavigate).toHaveBeenCalledWith('PokemonDetails', {
      name: 'pikachu',
      url: 'https://pokeapi.co/api/v2/pokemon/25/',
    });
  });
});