const User = require("../models/user-schema");
const bcrypt = require("bcrypt");

const home = async (req, res) => {
  try {
    res.status(200).send("Hello World!");
  } catch (err) {
    console.log(err);
  }
};

// registerations api routes
const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ message: "email already exists" });
    }

    //!hash the password
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
      //   password: hashedPassword,
    });

    // if (typeof userCreated !== "object" || userCreated === null) {
    //   return res
    //     .status(500)
    //     .json({ msg: "Unexpected response from User.create" });
    // }

    console.log(userCreated);

    res.status(201).json({
      msg: "registered successfully",

      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

// login api routes
const login = async (req, res) => {
  try {
    // Extract email and password from request body
    const { email, password } = req.body;
    // Check if a user with the provided email exists
    const userExist = await User.findOne({ email });
    // If user doesn't exist, return an error response
    if (!userExist) {
      return res.status(400).json({ message: "email does not exist" });
    }
    // Compare the provided password with the hashed password stored in the database
    // const isMatch = await bcrypt.compare(password, userExist.password);
    const isMatch = await userExist.comparePassword(password);

    // If passwords don't match, return an error response
    if (!isMatch) {
      return res.status(400).json({ message: "password does not match" });
    }
    // Generate a token for the authenticated user
    const token = await userExist.generateToken();
    // Send a success response with the token and user ID
    res.status(200).json({
      msg: "loged in successfully",
      token,
      userId: userExist._id.toString(),
    });
  } catch (err) {
    console.error(err);
    // res.status(500).json({ msg: "Internal Server Error" });
    next(err);
  }
};

const user = async (req, res) => {
  try {
    // const userData = await User.find({});
    const userData = req.user;
    console.log(userData);
    return res.status(200).json({ userData });
  } catch (error) {
    console.log(` error from user route ${error}`);
  }
};

module.exports = { home, register, login, user };
