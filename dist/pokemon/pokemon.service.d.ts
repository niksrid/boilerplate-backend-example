import { PokemonEntity } from './pokemon.entity';
import { Repository } from 'typeorm';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { singlePokemon } from './input/pokemon.input';
export declare class PokemonService {
    private readonly PokemonRepository;
    constructor(PokemonRepository: Repository<PokemonEntity>);
    createPokemon(data: CreatePokemonDto): Promise<PokemonEntity>;
    getPokemons(): Promise<PokemonEntity[]>;
    getSinglePokemon(data: singlePokemon): Promise<PokemonEntity>;
}
