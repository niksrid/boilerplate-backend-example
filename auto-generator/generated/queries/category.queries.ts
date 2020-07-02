
import { extendType } from '@nexus/schema'

export const categoryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.category({"filtering":true, "ordering":true, "alias":"category"})
	t.crud.categories({"filtering":true, "ordering":true, "alias":"categories"})
  }
})

    
