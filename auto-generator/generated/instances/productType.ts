
import { objectType } from '@nexus/schema'
export const productType = objectType({
    name:'product_type',
    definition(t){
     t.model.id()
	t.model.type()
	t.model.type_name()
	t.model.product_types_junction()
    }
  })

    
