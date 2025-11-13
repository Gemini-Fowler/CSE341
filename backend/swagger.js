const swaggerAutogen = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Contacts API',
            version: '1.0.0',
            description: 'A simple API for managing contacts stored in MongoDB'
        },
        servers: [
            {
                url: 'http://localhost:8080',
                description: 'Development server'
            },
            {
                url: process.env.RENDER_URL || 'https://your-render-url.onrender.com',
                description: 'Production server'
            }
        ],
        components: {
            schemas: {
                Contact: {
                    type: 'object',
                    required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday'],
                    properties: {
                        _id: {
                            type: 'string',
                            description: 'The auto-generated MongoDB ObjectId'
                        },
                        firstName: {
                            type: 'string',
                            description: 'First name of the contact'
                        },
                        lastName: {
                            type: 'string',
                            description: 'Last name of the contact'
                        },
                        email: {
                            type: 'string',
                            description: 'Email address of the contact'
                        },
                        favoriteColor: {
                            type: 'string',
                            description: 'Favorite color of the contact'
                        },
                        birthday: {
                            type: 'string',
                            description: 'Birthday of the contact (format: YYYY-MM-DD)'
                        }
                    }
                },
                CreateContactRequest: {
                    type: 'object',
                    required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday'],
                    properties: {
                        firstName: {
                            type: 'string',
                            example: 'John'
                        },
                        lastName: {
                            type: 'string',
                            example: 'Doe'
                        },
                        email: {
                            type: 'string',
                            example: 'john@example.com'
                        },
                        favoriteColor: {
                            type: 'string',
                            example: 'blue'
                        },
                        birthday: {
                            type: 'string',
                            example: '1990-05-15'
                        }
                    }
                }
            }
        }
    },
    apis: ['./backend/routes/contacts.js']
};

const swaggerSpec = swaggerAutogen(options);

module.exports = swaggerSpec;
