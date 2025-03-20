require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./models/HoldingsModels");
const { PositionsModel } = require("./models/PositionsModels");
const { OrdersModel } = require("./models/OrdersModels");
const User = require("./models/UserModel");

const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || process.env.KEY;

const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:3001"], // ✅ Allow frontend
  credentials: true, // ✅ Allow cookies (JWT storage)
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: "Content-Type,Authorization"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookieParser());

//User Registration
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if(!name || !email || !password){
    return res.status(400).json({msg : "All fields are required"});
  }

  try {
    let user = await User.findOne({email});
    if( user ) return res.status(400).json({msg : "User already exists"});

    const hashedPassword = await bcrypt.hash(password,10);
    user = new User({name, email, password : hashedPassword});

    await user.save();
    res.json({ msg : "User registered successfully" });
  } catch (e) {
    // console.error("Registration Error", err);
    res.status(500).json({ msg : "Server Error" });
  }
})

//User Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    // console.log("🔍 Stored Hashed Password:", user.password);
    // console.log("🔑 Entered Password:", password);

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res
      .cookie("token", token, { httpOnly: true, secure:false, sameSite:"lax" })
      .json({ msg: "Login Successful", token, user: { id: user._id, email: user.email } });
  } catch (err) {
    res.status(500).json({ msg: "Server Error " });
  }
});

app.post("/logout", (req,res) => {
  res.clearCookie("token", { httpOnly : true, sameSite:"lax"});
  res.status(200).json({msg : "Logged Out Successfully"});
})

// Middleware to protect routes
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ msg: "Access Denied " });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};

// Holdings Data
// app.get("/addHolding", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     newHolding.save();
//   });
//   res.send("Done!")
// });

// Positions Data
// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPositions = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPos.save();
//   });
//   res.send("Done!");
// });

//Protected Dashboard Route
app.get("/dashboard", verifyToken, (req, res) => {
  res.json({ msg: "Welcome to Dashboard", user: req.user });
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/addOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  res.send("Order saved!");
});

app.get("/allOrders", async(req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
})

mongoose
  .connect(URL)
  .then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });
