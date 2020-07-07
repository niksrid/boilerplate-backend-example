
import { objectType } from '@nexus/schema'
export const gymTimings = objectType({
    name:'gym_timings',
    definition(t){
     t.model.gym_id()
	t.model.id()
	t.model.timing_id()
	t.model.gym()
	t.model.timing()
    }
  })

    
