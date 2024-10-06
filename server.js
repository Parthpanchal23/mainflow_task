const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");



mongoose
  .connect(`mongodb://0.0.0.0:27017/react-login-tut`)
  .then((data) => {
    console.log("mongodb connected",data.connection.port,'->',data.connection.name);
  })
  .catch((eror) => {
    console.log("connection failed with mongodb",eror);
  });

  const userSchema =new mongoose.Schema({
    name:{
        type:String,
        require:false
    },
    email:{
        type:String,
        require:true,
        unique: true,
    },
    password:{
        type:String,
        require:true
    }
  }, {
    timestamps: true
})

const User = mongoose.model("User",userSchema);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", cors(), (req, res) => {
  res.send("welsome to th authentication service");
});


app.listen(8001, () => {
  console.log("Port Connected");
});

app.post("/", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });

        if (user) {
            if (user.password === password) {
                res.json({ status: "sucesss" });
            } else {
                res.json({ status: "wrong Password" });
            }
        } else {
            res.json({ status: "not exist" });
        }
    } catch (error) {
        res.json({ status: "fail"});
    }
});

app.post("/signup", async (req, res) => {
    const {name,email, password } = req.body;
    const data = {
        name: name,
        email: email,
        password: password,
    };

    try {
        const check = await User.findOne({ email: email });

        if (check) {
        res.json({ status: "exist" });
        } else {
            try {
                const newUser = new User(data);
                await newUser.save(); // Save the user to the database
            res.json({ status: "created",data:newUser });
            } catch (error) {
                res.json({ status: "Insertion failed" });
            }
        }
    } catch (error) {
        res.json({ status: "fail" });
    }
});