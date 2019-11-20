// 動作は全ルーターで共通。@/routes/common.js参照。

import Router from 'express-promise-router';
import { kGetAll, kGetById, kPost } from './common.js';

const router = Router();

router.get('/', async (req, res) => {
    const resData = await kGetAll(req, res, 'fabric');
    res.json(resData);
});

router.get('/:id', async (req, res) => {
    const resData = await kGetById(req, res, 'fabric');
    res.json(resData);
});

router.post('/', async(req, res) => {
    const resData = await kPost(req, res, 'fabric');
    res.json(resData);

});

export default router;
