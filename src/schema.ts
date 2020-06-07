import { intArg, makeSchema, objectType, stringArg, enumType, asNexusMethod, subscriptionField } from '@nexus/schema'
import { nexusPrismaPlugin } from 'nexus-prisma'
import { PubSub } from 'graphql-yoga'
import { ValidationContext } from 'graphql'


const Pokemon = objectType({
  name:'pokemon',
  definition(t){
    t.model.id()
    t.model.name()
    t.model.pokedex()
    t.model.type()
  }
})

const Query = objectType({
  name:"Query",
  definition(t){
    t.crud.pokemon({
      type:'pokemon',
      alias:"pokemon",
      filtering: true,
      ordering:true
    })

  }
})

const Mutation = objectType({
  name:"Mutation",
  definition(t){

    t.crud.createOnepokemon({
      alias:"createPokemon",
      async resolve(root,args,ctx,info,originalResolve){
        const res = await originalResolve(root,args,ctx,info)
        ctx.pubsub.publish('newPokemon', res);
        return res;
      }
    })

    t.crud.updateOnepokemon()
    t.crud.deleteOnepokemon()
    t.crud.upsertOnepokemon()

    t.crud.deleteManypokemon({
      type:'pokemon',
      alias:"deleteMany"
    })
    t.crud.updateManypokemon({
      type:'pokemon',
      alias:"updateMany"
    })
  }
})

const Subscription = subscriptionField('newPokemon',{
    type: 'pokemon',
    async subscribe(root, args, ctx){
      return ctx.pubsub.asyncIterator('newPokemon');
    },
    resolve(payload){
      return payload;
    }
})


export const schema = makeSchema({
  types: [Pokemon, Query, Mutation, Subscription],
  plugins: [nexusPrismaPlugin({experimentalCRUD:true})],
  
  outputs: {
    schema: __dirname + '/../schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})
