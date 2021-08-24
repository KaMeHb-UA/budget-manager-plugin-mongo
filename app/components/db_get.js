import db from '../helpers/mongo.js';

const ops = {
    '=': (name, val) => ({ [name]: { $eq: val } }),
    '!=': (name, val) => ({ [name]: { $ne: val } }),
};

export default async ({ table, options }) => {
    const collection = db.collection(table);
    const { limit, reverse, filters } = options || {};
    const findOpts = {};
    if(filters) for(const [name, op, val] of filters) Object.assign(findOpts, ops[op](name, val));
    let cursor = collection.find(findOpts).sort({
        $natural: reverse ? -1 : 1,
    });
    if(limit) cursor = cursor.limit(limit);
    const found = await cursor.toArray();
    return found.map(doc => {
        const id = doc._id.toHexString();
        delete doc._id;
        return { id, data: doc };
    });
}
