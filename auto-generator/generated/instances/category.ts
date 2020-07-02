
import { objectType } from '@nexus/schema'
export const category = objectType({
    name:'category',
    definition(t){
     t.model.grouped_under()
	t.model.icon()
	t.model.id()
	t.model.name()
	t.model.product_categories_junction()
    }
  })

    
