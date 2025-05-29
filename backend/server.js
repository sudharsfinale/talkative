const express = require("express");
const cors = require("cors");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const mongoose = require("mongoose")

//instance of this express variable
const app = express();


dotenv.config();

const PORT = process.env.PORT || 7000;

mongoose.connect(process.env.MONGO_URI).then(async() => {
    console.log(mongoose.modelNames())
    const collections = await mongoose.connection.db.listCollections().toArray();
    collections.forEach(col => console.log(col.name));
    console.log("Collections:", collections);
    console.log("Connected to MongoDB");
})

// app.use(cors()); // allows all origins by default

// OR for specific origins
app.use(cors({ origin: 'http://localhost:5173' }));

app.get("/", (req, res) => {
    res.send("API is running")
})

app.get("/api/getAllChats", (req, res) => {

    res.send(chats)
})

app.get("/api/getChatById/:id", (req, res) => {
    let foundChat = chats.find(chat => chat._id === req.params.id)
    res.send(foundChat)
})



//listen on which port
app.listen(PORT, console.log("Server is running in Port 7000"))