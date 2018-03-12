
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const lc = require('./controllers/lyrics_controller');
const fc = require('./controllers/favs_controller');

let favsArr = [];

let app = express();
const port = 4010;
console.log(port);

app.use(cors());
app.use(bodyParser.json());

app.get('/api/artist/title', lc.read)
app.post({favsArr}, lc.create)


// app.put('./api/favs', fc.update)
// app.delete('./api/favs', fc.delete)

app.listen(port, () => console.log('Listening on port ' + port + '...'))