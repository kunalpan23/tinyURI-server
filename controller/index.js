const TinyUrl = require('../model/tinyUrl');

module.exports = {
    uploadTinyUrl: (query, callback) => { // { in the format of TinyUrl Model}
        const tinyUrlInstance = new TinyUrl(query);
        tinyUrlInstance.save(callback);
    },

    findTinyUrl(hash, callback) {
        TinyUrl.find({ hash: hash }, callback);
    }
}