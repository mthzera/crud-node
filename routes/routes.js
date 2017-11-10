'use strict';

module.exports = (app) => {

    const crudController = require('../controllers/crudController');

    app.route('/users')
    .post('crudController.createUser')
    .get('crudController.listUsers');


}