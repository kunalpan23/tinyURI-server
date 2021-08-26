require("dotenv").config();

module.exports = {
    dbURL: `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_INFO}/${process.env.DB_NAME}?retryWrites=true&w=majority`
}