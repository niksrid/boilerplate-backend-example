import { objectType } from '@nexus/schema'

export const pokemonMutations = objectType({
    name:"Mutation",
    definition(t){
  
      t.crud.createOnepokemon({
        alias:"createPokemon",
        async resolve(root,args,ctx,info,originalResolve){
          const res = await originalResolve(root,args,ctx,info);
          ctx.pubsub.publish('newPokemon', res);
          return res;
        }
      })
  
      t.crud.updateOnepokemon()
      t.crud.deleteOnepokemon()
      t.crud.upsertOnepokemon()
  
      t.crud.deleteManypokemon({
        alias:"deleteMany"
      })

      t.crud.updateManypokemon({
        alias:"updateMany"
      })
      
    }
  })
  