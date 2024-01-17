const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  phone: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  isAdmin: {
    type: "Boolean",
    default: false,
  },
});

//? secure the password by hashing the password
userSchema.pre("save", async function (next) {
  // console.log('pre method',this)
  const user = this;
  if (!user.isModified("password")) {
    next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, salt);
    user.password = hash_password;
  } catch (err) {
    next(err);
  }
});

//compare the password
userSchema.methods.comparePassword = async function (password) {
  try {
    const isMatch = bcrypt.compare(password, this.password);
    return isMatch;
  } catch (err) {
    console.log(err);
  }
};

//! json web token
const jwtSecretKey = "abcdefghij";
userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userid: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      jwtSecretKey,
      //   process.env.JWT_SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
  } catch (err) {
    console.log(err);
  }
};

const User = new mongoose.model("User", userSchema);
module.exports = User;
