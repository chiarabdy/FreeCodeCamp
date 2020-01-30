// To keep things tidy, we'll define our MongoDB/Mongoose model here in a separate file:

// We'll need mongoose for this:
const mongoose = require("mongoose");

// We'll create a schema for our database entries to follow, making both of its keys/properties required...
const urlSchema = new mongoose.Schema({
  original_url: {type: String, required: true},
  short_url: {type: Number, required: true}
});

// ... and with this Schema, we'll make a Model which we'll use when carrying out our CRUD actions on the Documents/Instances in our database:
    // Note the capitalisation because it's a Model/constructor.
// To make our Model (and its Schema, etc.) available from outside this file, we'll export this whole file using module.export:
module.exports = mongoose.model("UrlEntry", urlSchema);

