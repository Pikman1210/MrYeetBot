const {Schema, model, models} = require("mongoose");

const blockedUsersSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    blocked: {
        type: Boolean,
        required: true
    },
    reason: {
        type: String,
        required: true
    }
});

const name = "blocked-users";
module.exports = models[name] || model(name, blockedUsersSchema);