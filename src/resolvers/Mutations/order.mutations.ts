
  import { extendType } from '@nexus/schema'
  export const orderMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneorder({"alias":"createOneorder"})
	t.crud.updateOneorder({"alias":"updateOneorder"})
	t.crud.deleteOneorder({"alias":"deleteOneorder"})
	t.crud.upsertOneorder({"alias":"upsertOneorder"})
	t.crud.updateManyorder({"alias":"updateManyorder"})
	t.crud.deleteManyorder({"alias":"deleteManyorder"})
  
      }
    })
    
