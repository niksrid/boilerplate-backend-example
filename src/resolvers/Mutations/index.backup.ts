import * as productMutations from './product.mutations';
import * as userMutations from './user.mutations';
export const Mutations = {
    ...productMutations,
    ...userMutations
}