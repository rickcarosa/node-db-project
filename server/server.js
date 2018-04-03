const express = require('express')
    , bodyParser = require('body-parser')
    , app = express()
    , port = 3005
    , controller = require('./controller')
    , cors = require('cors')


app.use(bodyParser.json());
app.use(cors());

app.get('/api/characters/?name=jon snow', controller.boy) //not a query 

// app.get('/api/characters/?name=daenerys targaryen', controller.girl)

app.get('/api/players', controller.read)

app.post('/api/players', controller.create)

app.put('/api/players/', controller.update) 

app.delete('/api/players/:name', controller.delete)



app.listen(3005, () => console.log('the north remembers'));