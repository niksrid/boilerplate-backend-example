
import * as cartMutations from './cart.mutations';
import * as categoryMutations from './category.mutations';
import * as driverMutations from './driver.mutations';
import * as driverDocumentMutations from './driverDocument.mutations';
import * as orderMutations from './order.mutations';
import * as productMutations from './product.mutations';
import * as productCategoriesJunctionMutations from './productCategoriesJunction.mutations';
import * as productImageMutations from './productImage.mutations';
import * as productQuantityMutations from './productQuantity.mutations';
import * as productRatingMutations from './productRating.mutations';
import * as productTypeMutations from './productType.mutations';
import * as productTypesJunctionMutations from './productTypesJunction.mutations';
import * as storeMutations from './store.mutations';
import * as storeDocumentMutations from './storeDocument.mutations';
import * as userMutations from './user.mutations';
import * as userAddressMutations from './userAddress.mutations';
import * as voucherMutations from './voucher.mutations';
import * as wishlistMutations from './wishlist.mutations';

export const Mutations = {
  ...cartMutations,
...categoryMutations,
...driverMutations,
...driverDocumentMutations,
...orderMutations,
...productMutations,
...productCategoriesJunctionMutations,
...productImageMutations,
...productQuantityMutations,
...productRatingMutations,
...productTypeMutations,
...productTypesJunctionMutations,
...storeMutations,
...storeDocumentMutations,
...userMutations,
...userAddressMutations,
...voucherMutations,
...wishlistMutations,
}

    
