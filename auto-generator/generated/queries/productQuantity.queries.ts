
import { extendType } from '@nexus/schema'

export const productQuantityQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.productQuantity({"filtering":true, "ordering":true, "alias":"productQuantity"})
	t.crud.productQuantities({"filtering":true, "ordering":true, "alias":"productQuantities"})
  }
})

    
