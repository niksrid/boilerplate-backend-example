
import { objectType } from '@nexus/schema'
export const productImage = objectType({
    name:'product_image',
    definition(t){
     t.model.id()
	t.model.image()
	t.model.product_id()
	t.model.product()
    }
  })

    
