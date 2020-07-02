
  import { extendType } from '@nexus/schema'
  export const voucherMutations = extendType({
    type:'Mutation',
      definition(t){
       t.crud.createOnevoucher({"alias":"createOnevoucher"})
	t.crud.updateOnevoucher({"alias":"updateOnevoucher"})
	t.crud.deleteOnevoucher({"alias":"deleteOnevoucher"})
	t.crud.upsertOnevoucher({"alias":"upsertOnevoucher"})
	t.crud.updateManyvoucher({"alias":"updateManyvoucher"})
	t.crud.deleteManyvoucher({"alias":"deleteManyvoucher"})
  
      }
    })
    
