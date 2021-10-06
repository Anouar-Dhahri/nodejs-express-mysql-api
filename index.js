const express = require('express');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const jsDoc = require('swagger-jsdoc');

const connection = require('./configs/db');

const PORT = process.env.PORT || 4000;
const options = {
    definition: {
        openapi : "3.0.0",
        info: {
            title: "User API",
            version: "1.0.0",
            description: "A simple Express Library API"
        },
        servers: [
            {
                url: "http://localhost:4000"
            }
        ]
    },
    apis: ["./routes/*.js"],
}


const specs = jsDoc(options);

app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api/users', require('./routes/user.routes'));
connection();


app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));