
import { extendType } from '@nexus/schema'

export const instructorTimingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.instructorTimings({"filtering":true, "ordering":true, "alias":"instructorTimings"})
  }
})

    
