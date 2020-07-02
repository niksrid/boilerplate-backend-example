
  import { extendType } from '@nexus/schema'
  export const wishlistMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnewishlist({"alias":"createOnewishlist"})
	t.crud.updateOnewishlist({"alias":"updateOnewishlist"})
	t.crud.deleteOnewishlist({"alias":"deleteOnewishlist"})
	t.crud.upsertOnewishlist({"alias":"upsertOnewishlist"})
	t.crud.updateManywishlist({"alias":"updateManywishlist"})
	t.crud.deleteManywishlist({"alias":"deleteManywishlist"})
  
      }
    })
    
