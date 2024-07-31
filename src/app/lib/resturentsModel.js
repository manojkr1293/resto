const { default: mongoose } = require("mongoose");

const resturentModel  = new mongoose.Schema({
  name:String,
  email:String,
  password:String
})
export const resturentSchema = mongoose.models.resturents || mongoose.model("resturents", resturentModel);