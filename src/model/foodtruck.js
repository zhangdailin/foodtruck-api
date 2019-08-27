import mongoose from 'mongoose';
import Review from './review';
let Schema = mongoose.Schema;

let FoodTruckSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  foodtype: {
    type: String,
    required: true
  },
  avgcost: Number,
  geometry: {
    type: { type: String, default: 'Point' },
    coordinates: {
      lat: Number,
      long: Number
    }
  },
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
});

module.exports = mongoose.model('FoodTruck', FoodTruckSchema);
