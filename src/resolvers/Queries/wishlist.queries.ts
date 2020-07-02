
import { extendType } from '@nexus/schema'

export const wishlistQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.wishlist({"filtering":true, "ordering":true, "alias":"wishlist"})
	t.crud.wishlists({"filtering":true, "ordering":true, "alias":"wishlists"})
  }
})

    
