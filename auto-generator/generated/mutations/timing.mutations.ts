
  import { extendType } from '@nexus/schema'
  export const timingMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnetiming({"alias":"createOnetiming"})
	t.crud.updateOnetiming({"alias":"updateOnetiming"})
	t.crud.deleteOnetiming({"alias":"deleteOnetiming"})
	t.crud.upsertOnetiming({"alias":"upsertOnetiming"})
	t.crud.updateManytiming({"alias":"updateManytiming"})
	t.crud.deleteManytiming({"alias":"deleteManytiming"})
  
      }
    })
    
