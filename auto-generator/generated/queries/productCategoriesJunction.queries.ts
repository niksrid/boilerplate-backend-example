
import { extendType } from '@nexus/schema'

export const productCategoriesJunctionQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.productCategoriesJunction({"filtering":true, "ordering":true, "alias":"productCategoriesJunction"})
	t.crud.productCategoriesJunctions({"filtering":true, "ordering":true, "alias":"productCategoriesJunctions"})
  }
})

    
