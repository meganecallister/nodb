let lyrics = [];
let favsArr = [];
let id = 0;

module.exports = {
    read: (req, res) => {
        req.status(200).send(lyrics);
    },

    create: (req, res) => {
        let {artist, title} = req.body;
        let fav = {
            artist: artist,
            title: title,
            id: id
        }
        id++
        favArr.push(fav)
        res.status(200).send(favsArr);
    },
    // update: (req, res) => {


    // },
    // delete: (req, res) => {


    // },

}