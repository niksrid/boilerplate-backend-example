import { objectType, mutationType, extendType } from '@nexus/schema'

export const userMutations = extendType({
  type:'Mutation',
    definition(t){
      t.crud.createOneuser({
        alias:'createUser',
        async resolve(root,args,ctx,info,originalResolve){
          const res = await originalResolve(root,args,ctx,info);
          const cart = await ctx.prisma.cart.create({data:{users:{connect:{id:await res.id}}}});
          const wishlist = await ctx.prisma.wishlist.create({data:{users:{connect:{id:await res.id}}}});
          return res;
        }
      })

    }
  })
  