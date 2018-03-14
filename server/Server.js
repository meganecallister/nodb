
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const lc = require('./controllers/lyrics_controller');
const fc = require('./controllers/favs_controller');

let app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/api/artist/title', lc.read)
app.get('/api/readFavsArr', fc.read)
app.post('/api/createFavsArr', fc.create)
app.put('/api/updateFavsArr/:id', fc.update)
app.delete('/api/deleteFavsArr/:id', fc.delete)

const port = 4010;
app.listen(port, () => console.log('Listening on port ' + port + '...'))