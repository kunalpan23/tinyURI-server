const router = require("express").Router();
const controller = require('../controller');
const utils = require("../utils");


router.post("/createUrl", (req, res) => {
    const url = utils.appendProtocolToUrl(req.query.url);
    const isValidUrl = utils.validateUrl(url);
    if (isValidUrl) {
        const hash = utils.makeid(Math.floor(Math.random() * (8 - 5 + 1) + 5));
        controller.uploadTinyUrl({ url, hash }, (err, data) => {
            if (err) return res.send({ isSuccess: false, status: JSON.stringify(err) });

            return res.send({ isSuccess: true, data });
        });
    } else {
        console.log("is in valide");
        return res.send({ isSuccess: false, status: "URL is not valid" });
    }
});

router.get("/:hash", (req, res) => {
    const { hash } = req.params;
    controller.findTinyUrl(hash, (err, data) => {
        if (err) return res.send({ isSuccess: false, status: JSON.stringify(err) });

        if (data && data.length) {
            const collectionData = data.pop();
            return res.redirect(collectionData.url);
        } else {
            return res.send({ isSuccess: false, status: "No Data found in the collection" });
        }
    })
})


module.exports = router;