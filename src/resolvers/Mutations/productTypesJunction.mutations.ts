
  import { extendType } from '@nexus/schema'
  export const productTypesJunctionMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneproduct_types_junction({"alias":"createOneproductTypesJunction"})
	t.crud.updateOneproduct_types_junction({"alias":"updateOneproductTypesJunction"})
	t.crud.deleteOneproduct_types_junction({"alias":"deleteOneproductTypesJunction"})
	t.crud.upsertOneproduct_types_junction({"alias":"upsertOneproductTypesJunction"})
	t.crud.updateManyproduct_types_junction({"alias":"updateManyproductTypesJunction"})
	t.crud.deleteManyproduct_types_junction({"alias":"deleteManyproductTypesJunction"})
  
      }
    })
    
