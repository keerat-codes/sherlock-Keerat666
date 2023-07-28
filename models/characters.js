const mongoose = require('mongoose');

const charactersSchema = new mongoose.Schema({
characterName : { type:  String, description: "Required Field", required: true },
});

module.exports = mongoose.model('characters', charactersSchema);