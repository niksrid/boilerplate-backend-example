
  import { extendType } from '@nexus/schema'
  export const productRatingMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneproduct_rating({"alias":"createOneproductRating"})
	t.crud.updateOneproduct_rating({"alias":"updateOneproductRating"})
	t.crud.deleteOneproduct_rating({"alias":"deleteOneproductRating"})
	t.crud.upsertOneproduct_rating({"alias":"upsertOneproductRating"})
	t.crud.updateManyproduct_rating({"alias":"updateManyproductRating"})
	t.crud.deleteManyproduct_rating({"alias":"deleteManyproductRating"})
  
      }
    })
    
