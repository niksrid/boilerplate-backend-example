import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonResolver } from './pokemon.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonEntity } from './pokemon.entity';

@Module({
  imports:[TypeOrmModule.forFeature([PokemonEntity])],
  providers: [PokemonService, PokemonResolver]
})
export class PokemonModule {}
