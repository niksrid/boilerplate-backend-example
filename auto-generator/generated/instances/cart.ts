
import { objectType } from '@nexus/schema'
export const cart = objectType({
    name:'cart',
    definition(t){
     t.model.id()
	t.model.product()
	t.model.shipping_cost()
	t.model.total_cost()
	t.model.total_discount()
	t.model.user_id()
	t.model.vouchers()
	t.model.product_quantity()
	t.model.user()
	t.model.voucher()
    }
  })

    
