import IGeneralPokemonDataItem from './iGeneralPokemonDataItem';

/**
 * Sprites of the Pokemon: Front default as fallback and Official as main.
 */
interface Sprites {
  front_default: string;
  other: {
    front_default: {
      front_default: string;
    };
  };
}

interface StatsList {
  stat: IGeneralPokemonDataItem;
  base_stat: string;
}

/**
 * Pokemon data type.
 */
export interface IPokemonData {
  /**
   * Unique pokemon id.
   */
  id?: any | null;
  /**
   * Pokemon name.
   */
  name: string;
  names: Array<IGeneralPokemonDataItem>;
  /**
   * Url.
   */
  url: string;
  /**
   * Weight.
   */
  weight: string;
  /**
   * Height
   */
  height: string;
  /**
   * Order number
   */
  order: string;
  /**
   * Pokemon types.
   */
  types: Array<{ type: IGeneralPokemonDataItem }>;

  /**
   * Abilities.
   */
  abilities: Array<{ ability: IGeneralPokemonDataItem }>;
  /**
   * Moves interface.
   */
  moves: Array<{ move: IGeneralPokemonDataItem }>;
  /**
   * Evolution chain
   */
  published?: boolean;
  sprites: Sprites;
  stats: Array<StatsList>;
  evolution_chain?: IGeneralPokemonDataItem;
}

export default IPokemonData;
