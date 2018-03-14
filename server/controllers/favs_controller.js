let favsArr = [{
    id: 1,
    favTitle: 'Resolution by Matt Corby'
}, {
    id: 2,
    favTitle: 'The Story by Brandi Carlile'
}, {
    id: 3,
    favTitle: 'Drop and Anchor by Mates of State'
}
];
let id = 3;

module.exports = {
    read: (req, res) => {
        res.status(200).send(favsArr);
    },   
    create: (req, res) => {
        let {favTitle} = req.body;
        let fav = {
            favTitle: favTitle,
            id: id
        }
        id++
        favsArr.push(fav)
        res.status(200).send(favsArr);
    },
    delete: ( req, res ) => {
        const { id } = req.params
        favsArr.splice( id, 1 )
        res.status(200).send( favsArr )        
    },
    update: (req, res) => {
        const {id} = req.params
        favsArr[id] = req.body.favTitle
        res.status(200).send(favsArr);
    }
}