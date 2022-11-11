const mongoose = require('mongoose');// import mongoose
// extract the schema from that mongoose object
const Schema = mongoose.Schema;
// create a new post schema
const subscripcionSchema = new Schema({
  content: {
    type: Array,
    required: true
  }
});
// export the model
module.exports = mongoose.model('Subscripcion', subscripcionSchema);