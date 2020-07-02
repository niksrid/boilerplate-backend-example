
import { objectType } from '@nexus/schema'
export const voucher = objectType({
    name:'voucher',
    definition(t){
     t.model.cost()
	t.model.id()
	t.model.user_id()
	t.model.validity_date()
	t.model.voucher_no()
	t.model.user()
	t.model.cart()
    }
  })

    
