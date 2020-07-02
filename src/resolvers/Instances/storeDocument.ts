
import { objectType } from '@nexus/schema'
export const storeDocument = objectType({
    name:'store_document',
    definition(t){
     t.model.document()
	t.model.id()
	t.model.store_id()
	t.model.store()
    }
  })

    
