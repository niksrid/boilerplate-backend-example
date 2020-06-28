import { objectType } from '@nexus/schema'

export const Pokemon = objectType({
    name:'pokemon',
    definition(t){
      t.model.id()
      t.model.name()
      t.model.pokedex()
      t.model.type()
    }
  })
