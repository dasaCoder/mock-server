const express = require('express')
const app = express()
const port = 3001

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/',(req,res) => console.log(req.headers,req.params,req.body));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))