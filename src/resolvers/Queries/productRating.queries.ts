
import { extendType } from '@nexus/schema'

export const productRatingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.productRating({"filtering":true, "ordering":true, "alias":"productRating"})
	t.crud.productRatings({"filtering":true, "ordering":true, "alias":"productRatings"})
  }
})

    
