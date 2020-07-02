
import { objectType } from '@nexus/schema'
export const user = objectType({
    name:'user',
    definition(t){
     t.model.blocked()
	t.model.full_name()
	t.model.id()
	t.model.mobile_no()
	t.model.cart()
	t.model.order()
	t.model.product_rating()
	t.model.user_address()
	t.model.voucher()
	t.model.wishlist()
    }
  })

    
