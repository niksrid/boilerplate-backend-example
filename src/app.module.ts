import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import { GraphQLModule} from '@nestjs/graphql';
import {PokemonModule} from './pokemon/pokemon.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PokemonModule,
    GraphQLModule.forRoot({
      autoSchemaFile:'schema.gpl'
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
