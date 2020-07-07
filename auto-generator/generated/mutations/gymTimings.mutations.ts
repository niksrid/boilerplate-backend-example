
  import { extendType } from '@nexus/schema'
  export const gymTimingsMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnegym_timings({"alias":"createOnegymTimings"})
	t.crud.updateOnegym_timings({"alias":"updateOnegymTimings"})
	t.crud.deleteOnegym_timings({"alias":"deleteOnegymTimings"})
	t.crud.upsertOnegym_timings({"alias":"upsertOnegymTimings"})
	t.crud.updateManygym_timings({"alias":"updateManygymTimings"})
	t.crud.deleteManygym_timings({"alias":"deleteManygymTimings"})
  
      }
    })
    
