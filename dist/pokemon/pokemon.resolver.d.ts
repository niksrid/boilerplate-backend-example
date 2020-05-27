import { PokemonEntity } from './pokemon.entity';
import { PokemonService } from './pokemon.service';
import { inputPokemon, singlePokemon } from './input/pokemon.input';
export declare class PokemonResolver {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    pokemon(): Promise<PokemonEntity[]>;
    singlePokemon(data: singlePokemon): Promise<PokemonEntity>;
    createPokemon(data: inputPokemon): Promise<PokemonEntity>;
}
