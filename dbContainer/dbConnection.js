require("dotenv").config();

const mongoose = require("mongoose");
const server = require("express")();
const port = process.env.PORT || 5000;
const { dbURL } = require("./dbUtils");

module.exports = async() => {
    server.set("port", port);

    await mongoose.connect(dbURL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => {
        console.log("DB connected");
        server.listen(server.get("port"), () => {
            console.log("Server Listening on Port " + server.get("port"));
        });
    }).catch((err) => {
        console.log(err);
    })

    return server;
}