// src/pokemon/pokemon.resolver.ts
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { PokemonEntity } from './pokemon.entity'
import { CreatePokemonDto } from './dto/create-pokemon.dto'
import { PokemonService } from './pokemon.service'
import { inputPokemon, singlePokemon } from './input/pokemon.input'

@Resolver(() => PokemonEntity)
export class PokemonResolver {
	constructor (private readonly pokemonService: PokemonService) {}

	@Query(() => [CreatePokemonDto])
	async pokemon () {
		return this.pokemonService.getPokemons()
	}

	@Query(() => CreatePokemonDto)
	async singlePokemon (@Args('data') data: singlePokemon) {
		return this.pokemonService.getSinglePokemon(data)
	}

	@Mutation(() => CreatePokemonDto)
	async createPokemon (@Args('data') data: inputPokemon) {
		return this.pokemonService.createPokemon(data)
	}
}
