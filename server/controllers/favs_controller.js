let favArr = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        let {artist, title} = req.body;
        let fav = {
            artist: artist,
            title: title,
            id: id
        }
        id++
        favArr.push(fav)
        res.status(200).send(favArr);
    },
    // update: (req, res) => {


    // },
    // delete: (req, res) => {


    // },

}