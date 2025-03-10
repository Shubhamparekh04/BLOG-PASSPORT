const { default: mongoose } = require("mongoose");

const credentialsSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
    confpassword: String,
  },
  { timestamps: true }
);

const credModel = mongoose.model("credModel", credentialsSchema);

module.exports = credModel;
