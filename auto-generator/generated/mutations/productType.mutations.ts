
  import { extendType } from '@nexus/schema'
  export const productTypeMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneproduct_type({"alias":"createOneproductType"})
	t.crud.updateOneproduct_type({"alias":"updateOneproductType"})
	t.crud.deleteOneproduct_type({"alias":"deleteOneproductType"})
	t.crud.upsertOneproduct_type({"alias":"upsertOneproductType"})
	t.crud.updateManyproduct_type({"alias":"updateManyproductType"})
	t.crud.deleteManyproduct_type({"alias":"deleteManyproductType"})
  
      }
    })
    
