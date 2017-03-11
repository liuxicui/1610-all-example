let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: { type: String },
    sex: { type: String },
    pic: { type: Number }
  }
);
module.exports = mongoose.model('User', UserSchema);
