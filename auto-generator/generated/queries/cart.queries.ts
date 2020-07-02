
import { extendType } from '@nexus/schema'

export const cartQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cart({"filtering":true, "ordering":true, "alias":"cart"})
	t.crud.carts({"filtering":true, "ordering":true, "alias":"carts"})
  }
})

    
