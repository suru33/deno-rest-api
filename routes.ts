import { Router } from 'https://deno.land/x/oak/mod.ts';
import { createAddress } from './controllers/AddressController.ts';


const router = new Router();

router.post('/address', createAddress);

export default router;
