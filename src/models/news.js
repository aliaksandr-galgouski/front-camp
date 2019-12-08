const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const NewsSchema = new Schema({
  title :{
      type: String,
      unique : false,
      required : true
  },
  content : {
      type: String,
      unique : false,
      required : true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("News", NewsSchema);
