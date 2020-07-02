
import { extendType } from '@nexus/schema'

export const voucherQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.voucher({"filtering":true, "ordering":true, "alias":"voucher"})
	t.crud.vouchers({"filtering":true, "ordering":true, "alias":"vouchers"})
  }
})

    
