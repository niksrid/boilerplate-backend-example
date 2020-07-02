
import { objectType } from '@nexus/schema'
export const productCategoriesJunction = objectType({
    name:'product_categories_junction',
    definition(t){
     t.model.category_id()
	t.model.id()
	t.model.product_id()
	t.model.category()
	t.model.product()
    }
  })

    
