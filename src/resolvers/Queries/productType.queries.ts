
import { extendType } from '@nexus/schema'

export const productTypeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.productType({"filtering":true, "ordering":true, "alias":"productType"})
	t.crud.productTypes({"filtering":true, "ordering":true, "alias":"productTypes"})
  }
})

    
