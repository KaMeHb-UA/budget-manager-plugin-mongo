import { ObjectId } from 'mongodb';
import db from '../helpers/mongo.js';

export default async ({ table, id, data }) => {
    await db.collection(table).replaceOne({ _id: new ObjectId(id) }, data);
    return null;
}
