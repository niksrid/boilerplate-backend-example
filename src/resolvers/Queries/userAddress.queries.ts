
import { extendType } from '@nexus/schema'

export const userAddressQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.userAddress({"filtering":true, "ordering":true, "alias":"userAddress"})
	t.crud.userAddresses({"filtering":true, "ordering":true, "alias":"userAddresses"})
  }
})

    
