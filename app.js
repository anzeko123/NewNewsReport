const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const indexRouter = require("./routes/index")

app.use('/', indexRouter)
require('./initDB');

//definiramo swagger - ime operacije in kje se nahaja ta operacija oz. operacije
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'New News API',
            version: '1.0.0',
        }
    },
    apis: ['app.js', './routes/delete.js']
}

//definiramo swagger docs
const swaggerDocs = swaggerJsDoc(swaggerOptions)
//zdaj je potrebno še providati ta route v swagger
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

//prvo damo operacijo, potem kateri url naslov je, definiramo metodo
/**
 * @swagger
 * /lastEndpoint:
 *  get:
 *      description: Get last Endpoint called
 *      responses: 
 *          200:
 *              description: Success
 *      
 */
/**
 * @swagger
 * /mostPopularService:
 *  get:
 *      description: Get the most popular service
 *      responses: 
 *          200:
 *              description: Success
 *      
 */
/**
 * @swagger
 * /numCalls:
 *  get:
 *      description: Get the number of calls for a service
 *      responses: 
 *          200:
 *              description: Success
 *      
 */
/**
 * @swagger
 * /update:
 *  post:
 *      description: Update number of calls for a service in database
 *      parameters:
 *      - name: test
 *        description: test for numbers of calls
 *        in: formData
 *        required: true
 *        type: string
 *      responses: 
 *          201:
 *              description: Updated
 *      
 */

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log('App running');
});

module.exports = app;