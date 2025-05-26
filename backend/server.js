const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const mongoose = require("mongoose")

//instance of this express variable
const app = express();

dotenv.config();

const PORT = process.env.PORT || 7000;

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to MongoDB");
})

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