import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
