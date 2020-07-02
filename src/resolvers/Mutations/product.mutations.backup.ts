import { objectType, mutationField, mutationType, extendType, arg } from '@nexus/schema'

export const productMutations = extendType({
  type:'Mutation',
  definition(t) {
    t.crud.createOneproduct({
      alias: 'createProduct',
      computedInputs:{
        discounted_cost:({args,ctx,info}) => (args.data.mrp - args.data.discount),
        tax:({args,ctx,info}) => (0.18 * (args.data.mrp - args.data.discount)),
        total_cost:({args,ctx,info}) => (1.18 * (args.data.mrp - args.data.discount)),
      }
    })
  },
})
