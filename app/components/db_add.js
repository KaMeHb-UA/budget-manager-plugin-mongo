import db from '../helpers/mongo.js';

export default ({ table, data }) => {
    const res = await db.collection(table).insertOne(data);
    return res.insertedId.toHexString();
}
