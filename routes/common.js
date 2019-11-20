import mongodb from 'mongodb';

// 面倒。
const url = 'mongodb://localhost:27017';
const dbName = 'kuninushi';
const ObjectID = mongodb.ObjectID;

// GET /
// 全エントリを取得。
// サイズがでかいのでオブジェクトのid,type,dnのみ返す。
export async function kGetAll(req, res, target) {
    const client = mongodb.MongoClient(url, {useNewUrlParser: true});
    let resData = {};

    try {
        await client.connect();
        const col = client.db(dbName).collection(target);
        const objects = await col.find({}).addCursorFlag('noCursorTimeout', true).toArray();

        objects.forEach((obj) => {
            delete obj.object;
        });

        resData = objects;
    }finally {
        client.close();
    }
    return resData;
}

// GET /:id
// id指定でオブジェクトの実体を取得。
export async function kGetById(req, res, target) {
    const client = mongodb.MongoClient(url, {useNewUrlParser: true});
    let resData = {};
    try {
        await client.connect();
        const id = req.params.id;
        const col = client.db(dbName).collection(target);
        const object = await col.findOne({"_id": new ObjectID(id)});
        resData = object.object
    }finally {
        client.close();
    }
    return resData;
}

// POST /
// ACIの各エントリを以下のBSONにしてmongodbにinsertmany.
// {
//     type: オブジェクトのタイプ(fvTenantとか),
//     dn: オブジェクトのdn
//     object: オブジェクトの実体。これをそのままPOSTすれば設定投入できる形とする。
// }
export async function kPost(req, res, target) {
    const body = req.body;
    const client = mongodb.MongoClient(url, {useNewUrlParser: true});

    try {
        await client.connect();
        const col = client.db(dbName).collection(target);
        //いい感じにparseして保存.
        const payload = []
        body.forEach((obj) => {
            // Objectからtypeとdnを取得。APICのレスポンスJSON構成を見ろ。
            const type = Object.keys(obj)[0];
            const dn = obj[type].attributes.dn;

            const data = {
                type: type,
                dn: dn,
                object: obj,
            };

            // データをuni, infra, fabricに分類。
            if(target == "uni") {
                if (!(data.dn.includes("uni/infra/") || data.dn.includes("uni/fabric/"))) {
                    payload.push(data);
                }
            }
            else if(target == "infra") {
                if (data.dn.includes("uni/infra/")) {
                    payload.push(data);
                }
            }
            else if(target == "fabric") {
                if (data.dn.includes("uni/fabric/")) {
                    payload.push(data);
                }
            }
        });
        await col.insertMany(payload);
    }finally {
        client.close();
    }
    return {"message": "success"};
}

