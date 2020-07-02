
  import { extendType } from '@nexus/schema'
  export const categoryMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnecategory({"alias":"createOnecategory"})
	t.crud.updateOnecategory({"alias":"updateOnecategory"})
	t.crud.deleteOnecategory({"alias":"deleteOnecategory"})
	t.crud.upsertOnecategory({"alias":"upsertOnecategory"})
	t.crud.updateManycategory({"alias":"updateManycategory"})
	t.crud.deleteManycategory({"alias":"deleteManycategory"})
  
      }
    })
    
