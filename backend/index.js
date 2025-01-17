let express = require("express");
let cors = require("cors")
let app = express();
let mongoose = require('mongoose');



const corsOptions = {
    origin: ['https://weather-rouge-two.vercel.app'],  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  
    allowedHeaders: ['Content-Type', 'Authorization'],  
  };
  
  
app.use(cors(corsOptions))
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("suuccesfully running backend");
})

//DataBase
async function connectDatabase() {
  await  mongoose.connect('mongodb+srv://admin:uniWeather4545@cluster0.6kkzw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
    console.log('connect succesful')
})
.catch((err)=>{
    console.log(err)
})
}

//SCHEMA
let userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        password:true,
    }
})
//MODEL DATABASE
let User = mongoose.model('User',userSchema)


app.post("/register",async (req,res)=>{
    let {username,email,password,confirmPassword}= req.body;
    // console.log(username);
    if (!username) {
       return res.status(400).send("enter name")
    }else if(!email){
        return res.status(400).send("enter email!");
    }else if(!password){
        return res.status(400).send("enter password!");
    }else if(!confirmPassword){
        return res.status(400).send("enter confirm Password!");
    }

    if(password != confirmPassword){
       return res.status(400).send('password and confirm password is not match!');
    }

    let checkUser = await User.findOne({email});

    if(checkUser){
        return res.status(400).send("email already exists");
    }

    await User.create({
        name:username,
        email,
        password
    })
    return res.status(200).send({message:'done resgitser'});
})



app.post('/login', async (req,res)=>{
    let {username,email,password} = req.body

    let checkUser = await User.findOne({email});

    // console.log(checkUser);
    if(!checkUser){
        return res.status(400).send('user not found');
    }

    if (checkUser.name != username) {
        return res.status(400).send("invalid name")
    }
    if(checkUser.password != password){
        return res.status(400).send("invalid password")
    }

    return res.status(200).send({message:"login succesfull!",name:checkUser.name})

})

connectDatabase();


app.listen(3001);