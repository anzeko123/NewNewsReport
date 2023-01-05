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
 * /new:
 *  get:
 *      description: Get all new news
 *      responses: 
 *          200:
 *              description: Success
 *      
 */
/**
 * @swagger
 * /new:
 *  post:
 *      description: Post new news
 *      parameters:
 *      - name: title
 *        description: Title of news
 *        in: formData
 *        required: true
 *        type: string
 *      responses: 
 *          201:
 *              description: Created
 *      
 */
/**
 * @swagger
 * /new/delete:
 *  get:
 *      description: Get news for deletion
 *      responses: 
 *          200:
 *              description: Ready for delitinon
 *      
 */
/**
 * @swagger
 * /new/title:
 *  get:
 *      description: Get news for deletion
 *      responses: 
 *          200:
 *              description: Ready for delitinon
 *      
 */
/**
 * @swagger
 * /new/delete/deleted:
 *  delete:
 *      description: Get news for deletion
 *      responses: 
 *          200:
 *              description: News deleted
 *      
 */
/**
 * @swagger
 * /new/update:
 *  put:
 *      description: Get news for update
 *      responses: 
 *          200:
 *              description: News Updated
 *      
 */
/**
 * @swagger
 * /new/delete/deletedMultiple:
 *  delete:
 *      description: Delete Multiple news
 *      responses: 
 *          200:
 *              description: Chosen news deleted
 *      
 */
/**
 * @swagger
 * /new/titleDate:
 *  get:
 *      description: Get titles by specific dates
 *      responses: 
 *          200:
 *              description: Title by date selected
 *      
 */



const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log('App running');
});

module.exports = app;