
import { objectType } from '@nexus/schema'
export const productTypesJunction = objectType({
    name:'product_types_junction',
    definition(t){
     t.model.id()
	t.model.product_id()
	t.model.product_type_id()
	t.model.product_type()
	t.model.product()
    }
  })

    
