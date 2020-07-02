
import * as cart from './cart';
import * as category from './category';
import * as driver from './driver';
import * as driverDocument from './driverDocument';
import * as order from './order';
import * as product from './product';
import * as productCategoriesJunction from './productCategoriesJunction';
import * as productImage from './productImage';
import * as productQuantity from './productQuantity';
import * as productRating from './productRating';
import * as productType from './productType';
import * as productTypesJunction from './productTypesJunction';
import * as store from './store';
import * as storeDocument from './storeDocument';
import * as user from './user';
import * as userAddress from './userAddress';
import * as voucher from './voucher';
import * as wishlist from './wishlist';

export const Instances = {
  ...cart,
...category,
...driver,
...driverDocument,
...order,
...product,
...productCategoriesJunction,
...productImage,
...productQuantity,
...productRating,
...productType,
...productTypesJunction,
...store,
...storeDocument,
...user,
...userAddress,
...voucher,
...wishlist,
}

    
