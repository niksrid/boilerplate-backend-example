
import * as cartQuery from './cart.queries';
import * as categoryQuery from './category.queries';
import * as driverQuery from './driver.queries';
import * as driverDocumentQuery from './driverDocument.queries';
import * as orderQuery from './order.queries';
import * as productQuery from './product.queries';
import * as productCategoriesJunctionQuery from './productCategoriesJunction.queries';
import * as productImageQuery from './productImage.queries';
import * as productQuantityQuery from './productQuantity.queries';
import * as productRatingQuery from './productRating.queries';
import * as productTypeQuery from './productType.queries';
import * as productTypesJunctionQuery from './productTypesJunction.queries';
import * as storeQuery from './store.queries';
import * as storeDocumentQuery from './storeDocument.queries';
import * as userQuery from './user.queries';
import * as userAddressQuery from './userAddress.queries';
import * as voucherQuery from './voucher.queries';
import * as wishlistQuery from './wishlist.queries';

export const Queries = {
  ...cartQuery,
...categoryQuery,
...driverQuery,
...driverDocumentQuery,
...orderQuery,
...productQuery,
...productCategoriesJunctionQuery,
...productImageQuery,
...productQuantityQuery,
...productRatingQuery,
...productTypeQuery,
...productTypesJunctionQuery,
...storeQuery,
...storeDocumentQuery,
...userQuery,
...userAddressQuery,
...voucherQuery,
...wishlistQuery,
}

    
