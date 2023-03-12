import Collection from "../models/collection.model";

export async function getCollections(skip, limit) {
    console.log('starting')
    return await Collection.find().skip(skip).limit(limit).sort({'_id':-1}).exec()
}

export async function getCollection(id) {
    return await Collection.findById(id).exec();
}
