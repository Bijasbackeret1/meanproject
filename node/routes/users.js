const express = require('express');
const Controller = require('../Controllers/controller');

const router = express.Router();


router.route('/user').post(Controller.user);
router.route('/login').post(Controller.login);
//router.route('/userlist/:id').get(Controller.userlist);
router.route('/userlist').get(Controller.userlist);
router.route('/userapproval/:id').patch(Controller.userapproval);
router.route('/userdelete/:id').delete(Controller.userdelete);
router.route('/pwdreset/:id').patch(Controller.pwdreset);
//router.route('/userlist/:id').get(Controller.userlist)
//router.route('/Login/:id').get(Controller.Login);
//router.route('/useredit/:id').patch(Controller.useredit);
//router.route('/userEdit/:id').patch(Controller.useredit);
router.route('/newdata/:id').patch(Controller.newdata);
router.route('/getuser/:id').get(Controller.getuser);

module.exports = router;

