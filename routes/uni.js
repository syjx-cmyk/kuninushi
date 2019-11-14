import Router from 'express-promise-router';
import mongodb from 'mongodb'


// 面倒。
const url = 'mongodb://localhost:27017';
const dbName = 'kuninushi';
const client = mongodb.MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});
const ObjectID = mongodb.ObjectID;

const router = Router();

router.get('/', async (req, res) => {
    await client.connect();
    const col = client.db(dbName).collection("uni");
    const objects = await col.find({}).toArray();

    objects.forEach((obj) => {
        delete obj.object;
    });

    client.close();

    res.json(objects);
});

router.get('/:id', async (req, res) => {
    await client.connect();
    const id = req.params.id;
    const col = client.db(dbName).collection("uni");
    const object = await col.findOne({"_id": new ObjectID(id)});
    
    client.close();

    res.json(object.object);
});

router.post('/', async(req, res) => {
    const uni = req.body;
    await client.connect();

    //一括投入のみ想定。POSTされた時点でドキュメント初期化する。
    const cols = await client.db(dbName).listCollections({name: "uni"}).toArray();
    if(cols.length > 0) {
        client.db(dbName).collection("uni").drop();
    }

    const col = client.db(dbName).collection("uni");

    //いい感じにparseして保存.
    const payload = []
    uni.forEach((obj) => {
        const k = Object.keys(obj)[0];
        const dn = obj[k].attributes.dn;

        const data = {
            type: k,
            dn: dn,
            object: obj,
        };

        payload.push(data);

    });
    await col.insertMany(payload);

    client.close();

    res.json({"message": "success"});
});

export default router;
