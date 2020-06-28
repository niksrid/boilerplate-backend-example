import { objectType } from '@nexus/schema'

export const pokemon = objectType({
    name:"Query",
    definition(t){
      t.crud.pokemon({
        alias:"pokemon",
        filtering: true,
        ordering:true
      })
    }
  })