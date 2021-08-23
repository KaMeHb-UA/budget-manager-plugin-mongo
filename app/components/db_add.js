import db from '../helpers/mongo.js';

export default async ({ table, data }) => {
    const res = await db.collection(table).insertOne(data);
    return res.insertedId.toHexString();
}
