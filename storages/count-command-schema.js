const {Schema, model, models} = require("mongoose");

const countCommandSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    currentNumber: {
        type: Number,
        required: true
    }
});

const name = "count-command";
module.exports = models[name] || model(name, countCommandSchema);