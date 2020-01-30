const mongoose = require("mongoose")
//Schemas
const Schema = mongoose.Schema;
const UrlSchema = new Schema({
    id: Number,
    url: String

})
//Define Models

const UrlModel =  mongoose.model('Url', UrlSchema);

module.exports = UrlModel