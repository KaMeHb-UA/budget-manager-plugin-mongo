import { ObjectId } from 'mongodb';
import db from '../helpers/mongo.js';

export default async ({ table, id, data }) => {
    await db.collection(table).updateOne({
        _id: new ObjectId(id),
    }, {
        $literal: data,
    });
    return null;
}
