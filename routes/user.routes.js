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
 *                      format: date
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
 * /api/users/get:
 *      get:
 *          summary: Return the list of all the users
 *          tags: [Users]
 *          responses:
 *              200:
 *                  description: The list of users
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/Users"
 *              400:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/Error"
 *              404:
 *                  description: Error Not Found
 *              500:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/Error"
 */
router.get('/get', getUsers);

/**
 * @swagger
 * /api/users/find/{id}:
 *      get:
 *          summary: Get the user by id
 *          tags: [Users]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: number
 *                required: true
 *                description: The user id
 *          responses:
 *              200:
 *                  description: The user description by id
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/User"
 *              400:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/Error"
 *              404:
 *                  description: Error Not Found
 *              500:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/Error"
 */
router.get('/find/:id', findUser);

/**
 * @swagger
 *  /api/users/create:
 *    post:
 *      summary: Create new user
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schemas/User'
 *      responses:
 *          200:
 *              description: The book was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                        $ref: '#/components/schemas/User'
 *          400:
 *              description: Some Server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'
 *          404:
 *              description: Error Not Found
 *          500:
 *              description: Some server error
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Error'
 */
router.post('/create', addUsers);

/**
 * @swagger
 * /api/users/update/{id}:
 *      put:
 *          summary: Update the User by the id
 *          tags: [Users]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: number
 *                required: true
 *                description: The user id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/User'
 *          responses:
 *              200:
 *                  description: User updated
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/User"
 *              400:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/Error"
 *              404:
 *                  description: Error Not Found
 *              500:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/Error"
 */
router.put('/update/:id', updateUser);

/**
 * @swagger
 * /api/users/deleteOne/{id}:
 *      delete:
 *          summary: Delete the user by id
 *          tags: [Users]
 *          parameters:
 *              - in: path
 *                name: id
 *                schema:
 *                  type: number
 *                required: true
 *                description: The user id
 *          responses:
 *              200:
 *                  description: User deleted
 *              400:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/Error"
 *              404:
 *                  description: Error Not Found
 *              500:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/Error"
 */
router.delete('/deleteOne/:id',deleteOne);


/**
 * @swagger
 * /api/users/deleteAll:
 *      delete:
 *          summary: Delete all users
 *          tags: [Users]
 *          responses:
 *              200:
 *                  description: All users deleted
 *              400:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/Error"
 *              500:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: "#/components/schemas/Error"
 */
router.delete('/deleteAll',deleteAll);

module.exports = router;
