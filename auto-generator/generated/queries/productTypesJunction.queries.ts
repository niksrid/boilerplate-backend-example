
import { extendType } from '@nexus/schema'

export const productTypesJunctionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.productTypesJunction({"filtering":true, "ordering":true, "alias":"productTypesJunction"})
	t.crud.productTypesJunctions({"filtering":true, "ordering":true, "alias":"productTypesJunctions"})
  }
})

    
