let lyrics = [];

module.exports = {
    read: (req, res) => {
        req.status(200).send(lyrics);
    }
}