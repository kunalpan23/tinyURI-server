const createConnection = require('./dbContainer/dbConnection');
const cors = require('cors');

(async() => {
    const server = await createConnection();
    server.use(cors());
    server.get("/", (req, res) => {
        res.send({ message: "Server is up" }).status(200);
    });
    server.use("/", require("./router/router.js"))
})();