const jwt = require("jsonwebtoken");

// Register
const registerUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: {
        id: 1,
        fullName,
        email,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Login
const loginUser = async (req, res) => {
  try {
    const { email } = req.body;

    const token = jwt.sign(
      {
        id: 1,
      },
      process.env.JWT_SECRET || "charis_secret_key",
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login Successful",
      token,
      data: {
        id: 1,
        fullName: "Demo User",
        email,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};