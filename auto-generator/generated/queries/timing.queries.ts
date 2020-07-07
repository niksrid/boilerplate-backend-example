
import { extendType } from '@nexus/schema'

export const timingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.timing({"filtering":true, "ordering":true, "alias":"timing"})
	t.crud.timings({"filtering":true, "ordering":true, "alias":"timings"})
  }
})

    
