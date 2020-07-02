
import { objectType } from '@nexus/schema'
export const productRating = objectType({
    name:'product_rating',
    definition(t){
     t.model.id()
	t.model.product_id()
	t.model.rating()
	t.model.user_id()
	t.model.product()
	t.model.user()
    }
  })

    
