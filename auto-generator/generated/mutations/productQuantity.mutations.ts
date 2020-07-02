
  import { extendType } from '@nexus/schema'
  export const productQuantityMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneproduct_quantity({"alias":"createOneproductQuantity"})
	t.crud.updateOneproduct_quantity({"alias":"updateOneproductQuantity"})
	t.crud.deleteOneproduct_quantity({"alias":"deleteOneproductQuantity"})
	t.crud.upsertOneproduct_quantity({"alias":"upsertOneproductQuantity"})
	t.crud.updateManyproduct_quantity({"alias":"updateManyproductQuantity"})
	t.crud.deleteManyproduct_quantity({"alias":"deleteManyproductQuantity"})
  
      }
    })
    
