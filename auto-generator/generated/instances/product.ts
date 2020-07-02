
import { objectType } from '@nexus/schema'
export const product = objectType({
    name:'product',
    definition(t){
     t.model.cost()
	t.model.description()
	t.model.discount()
	t.model.discounted_cost()
	t.model.id()
	t.model.mrp()
	t.model.store_id()
	t.model.tax()
	t.model.title()
	t.model.total_cost()
	t.model.store()
	t.model.order()
	t.model.product_categories_junction()
	t.model.product_image()
	t.model.product_quantity()
	t.model.product_rating()
	t.model.product_types_junction()
    }
  })

    
