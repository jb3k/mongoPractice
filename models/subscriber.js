const mongoose = require('mongoose')


const subscriberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    required: true
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

// two args ( name of the model, schema that corresponds with that model)
module.exports = mongoose.model('Subscriber', subscriberSchema)
