const express = require('express');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const jsDoc = require('swagger-jsdoc');

const connection = require('./configs/db');

const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(cors());

app.use('/api', require('./routes/user-route'));
connection();

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Server is running on port ${PORT}`));