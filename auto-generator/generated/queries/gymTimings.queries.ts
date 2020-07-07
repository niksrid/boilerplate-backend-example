
import { extendType } from '@nexus/schema'

export const gymTimingsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gymTimings({"filtering":true, "ordering":true, "alias":"gymTimings"})
  }
})

    
