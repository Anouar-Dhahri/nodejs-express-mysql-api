const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const router = express.Router();
const { 
    getUsers,
    addUsers,
    findUser,
    updateUser,
    deleteOne,
    deleteAll
 } = require('../controllers/User.controller');

/**
 * @swagger
 * components:
 *      schemas:
 *          User:
 *              type: object
 *              required:
 *                  -firstname
 *                  -lastname
 *                  -email
 *                  -phone
 *                  -createdAt
 *              properties:
 *                  id:
 *                      type: number
 *                      description: The auto-generated id of the user
 *                  firstname:
 *                      type: string
 *                  lastname:
 *                      type: string
 *                  email:
 *                      type: string
 *                      format: email
 *                  phone:
 *                      type: number
 *                      minLength: 8
 *                  createdAt:
 *                      type: string
 *                      format: date-time
 *                  exemple:
 *                      id: 1
 *                      firstname: Anouar
 *                      lastname: Dhahri
 *                      email: anouar@gmail.com 
 *                      phone: 12345678 
 *                      createdAt: 2017-07-21T17:32:28Z
 *          Users:
 *              type: array
 *              items:
 *                  $ref: "#/components/schemas/User"
 *          Error:
 *              type: object
 *              properties:
 *                  message:
 *                      type: string
 *              
 */

/**
 * @swagger
 * tags:
 *      name: Users
 *      description: The Users managing API
 */

/**
 * @swagger
 * /users
 *      get:
 *          summary: Return the list of all the users
 *          tags: [Users]
 *          responses:
 *              200:
 *                  description: The list of users
 *                  content:
 *                      application/json
 *                          schema:
 *                              $ref: "#/components/schemas/Users"
 *              400:
 *                  content:
 *                      application/json
 *                          schema:
 *                              $ref: "#/components/schemas/Error"
 *              500:
 *                  content:
 *                      application/json
 *                          schema:
 *                              $ref: "#/components/schemas/Error"
 */
router.get('/get', getUsers);

/**
 * @swagger
 * /users/{id}
 *      get:
 *          summary: Get the user by id
 *          tags: [Users]
 *          parameters:
 *              -in: path
 *              -name: id
 *              -schema:
 *                  type: number
 *              -required: true
 *              -description: the user id
 *          responses:
 *              200:
 *                  description: The user description by id
 *                  content:
 *                      application/json
 *                          schema:
 *                              $ref: "#/components/schemas/User"
 *              400:
 *                  content:
 *                      application/json
 *                          schema:
 *                              $ref: "#/components/schemas/Error"
 *              500:
 *                  content:
 *                      application/json
 *                          schema:
 *                              $ref: "#/components/schemas/Error"
 */
router.get('/find', findUser);


router.post('create', addUsers);

router.put('/update', updateUser);

router.delete('/deleteOne',deleteOne);

router.delete('/deleteAll',deleteAll);

module.exports = router;
