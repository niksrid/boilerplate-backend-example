
import { objectType } from '@nexus/schema'
export const instructorTimings = objectType({
    name:'instructor_timings',
    definition(t){
     t.model.id()
	t.model.instructor_id()
	t.model.timing_id()
	t.model.instructor()
	t.model.timing()
    }
  })

    
