const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const routeSignUp = require('./routes/signUp')
const cors = require('cors')
dotenv.config()

const app = express()

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(
    process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log("Connect to MongoDB");
    }
)

app.use(express.json());
app.use(cors())
app.use('/', routeSignUp);


app.listen(4000, (req, res)=>{
    console.log("Server is running")
})