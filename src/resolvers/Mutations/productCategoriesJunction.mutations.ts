
  import { extendType } from '@nexus/schema'
  export const productCategoriesJunctionMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneproduct_categories_junction({"alias":"createOneproductCategoriesJunction"})
	t.crud.updateOneproduct_categories_junction({"alias":"updateOneproductCategoriesJunction"})
	t.crud.deleteOneproduct_categories_junction({"alias":"deleteOneproductCategoriesJunction"})
	t.crud.upsertOneproduct_categories_junction({"alias":"upsertOneproductCategoriesJunction"})
	t.crud.updateManyproduct_categories_junction({"alias":"updateManyproductCategoriesJunction"})
	t.crud.deleteManyproduct_categories_junction({"alias":"deleteManyproductCategoriesJunction"})
  
      }
    })
    
