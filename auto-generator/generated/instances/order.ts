
import { objectType } from '@nexus/schema'
export const order = objectType({
    name:'order',
    definition(t){
     t.model.approved()
	t.model.driver_id()
	t.model.id()
	t.model.order_date()
	t.model.products()
	t.model.shipping_cost()
	t.model.shipping_provider()
	t.model.shipping_ref_no()
	t.model.status()
	t.model.store_ids()
	t.model.total_cost()
	t.model.total_discount()
	t.model.total_tax()
	t.model.user_address()
	t.model.user_id()
	t.model.driver()
	t.model.product()
	t.model.store()
	t.model.user()
    }
  })

    
