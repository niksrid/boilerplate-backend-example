
import { objectType } from '@nexus/schema'
export const timing = objectType({
    name:'timing',
    definition(t){
     t.model.closing_time()
	t.model.day()
	t.model.id()
	t.model.opening_time()
	t.model.gym_timings()
	t.model.instructor_timings()
    }
  })

    
