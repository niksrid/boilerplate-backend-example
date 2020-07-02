
import { objectType } from '@nexus/schema'
export const wishlist = objectType({
    name:'wishlist',
    definition(t){
     t.model.id()
	t.model.product()
	t.model.user_id()
	t.model.product_quantity()
	t.model.user()
    }
  })

    
