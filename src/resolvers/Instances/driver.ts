
import { objectType } from '@nexus/schema'
export const driver = objectType({
    name:'driver',
    definition(t){
     t.model.approved()
	t.model.blocked()
	t.model.currently_delivering()
	t.model.full_name()
	t.model.id()
	t.model.mobile_no()
	t.model.driver_document()
	t.model.order()
    }
  })

    
