
  import { extendType } from '@nexus/schema'
  export const userAddressMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneuser_address({"alias":"createOneuserAddress"})
	t.crud.updateOneuser_address({"alias":"updateOneuserAddress"})
	t.crud.deleteOneuser_address({"alias":"deleteOneuserAddress"})
	t.crud.upsertOneuser_address({"alias":"upsertOneuserAddress"})
	t.crud.updateManyuser_address({"alias":"updateManyuserAddress"})
	t.crud.deleteManyuser_address({"alias":"deleteManyuserAddress"})
  
      }
    })
    
