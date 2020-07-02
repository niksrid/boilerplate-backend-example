
import { objectType } from '@nexus/schema'
export const userAddress = objectType({
    name:'user_address',
    definition(t){
     t.model.alias()
	t.model.city()
	t.model.first_name()
	t.model.id()
	t.model.last_name()
	t.model.poc_no()
	t.model.state()
	t.model.street_address()
	t.model.user_id()
	t.model.zip_code()
	t.model.user()
    }
  })

    
