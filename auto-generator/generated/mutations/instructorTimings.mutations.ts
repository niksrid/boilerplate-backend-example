
  import { extendType } from '@nexus/schema'
  export const instructorTimingsMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOneinstructor_timings({"alias":"createOneinstructorTimings"})
	t.crud.updateOneinstructor_timings({"alias":"updateOneinstructorTimings"})
	t.crud.deleteOneinstructor_timings({"alias":"deleteOneinstructorTimings"})
	t.crud.upsertOneinstructor_timings({"alias":"upsertOneinstructorTimings"})
	t.crud.updateManyinstructor_timings({"alias":"updateManyinstructorTimings"})
	t.crud.deleteManyinstructor_timings({"alias":"deleteManyinstructorTimings"})
  
      }
    })
    
