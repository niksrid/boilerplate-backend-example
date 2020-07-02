
  import { extendType } from '@nexus/schema'
  export const cartMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnecart({"alias":"createOnecart"})
	t.crud.updateOnecart({"alias":"updateOnecart"})
	t.crud.deleteOnecart({"alias":"deleteOnecart"})
	t.crud.upsertOnecart({"alias":"upsertOnecart"})
	t.crud.updateManycart({"alias":"updateManycart"})
	t.crud.deleteManycart({"alias":"deleteManycart"})
  
      }
    })
    
