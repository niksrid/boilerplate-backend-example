
import { objectType } from '@nexus/schema'
export const driverDocument = objectType({
    name:'driver_document',
    definition(t){
     t.model.document()
	t.model.driver_id()
	t.model.id()
	t.model.driver()
    }
  })

    
