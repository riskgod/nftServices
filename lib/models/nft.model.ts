
import mongoose from 'mongoose';
const db = mongoose.createConnection('mongodb://127.0.0.1:27017/nft');
const { Schema } = mongoose;

const NftSchema = new Schema(
    {
        id: Number,
        name: String,
        stars: String,
        whaleHolders: String,
        holders: String,
        mints: String,
        twentyfourhETHVolume: String,
        twentyfourhETHVolumePerchange: String,
        price: String,
        sevenDayShadowPrice: [String],
        listed: String,
    
    }
)

const Nft = db.model('Nft', NftSchema);

export default Nft
