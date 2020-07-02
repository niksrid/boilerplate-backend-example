
import { objectType } from '@nexus/schema'
export const store = objectType({
    name:'store',
    definition(t){
     t.model.address()
	t.model.approved()
	t.model.blocked()
	t.model.id()
	t.model.lat()
	t.model.lng()
	t.model.name()
	t.model.order()
	t.model.product()
	t.model.store_document()
    }
  })

    
