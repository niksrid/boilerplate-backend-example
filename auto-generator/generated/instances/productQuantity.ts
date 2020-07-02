
import { objectType } from '@nexus/schema'
export const productQuantity = objectType({
    name:'product_quantity',
    definition(t){
     t.model.id()
	t.model.product_id()
	t.model.product_qty()
	t.model.product()
	t.model.cart()
	t.model.wishlist()
    }
  })

    
