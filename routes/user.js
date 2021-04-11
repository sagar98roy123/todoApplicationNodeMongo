const path = require('path');
const express=require('express');
const userController= require('../controllers/user');

const router= express.Router();

router.get('/user/add-todo',userController.getAddTodo);
router.post('/user/add-todo',userController.postAddTodo);
router.get('/user/todos',userController.getTodos);

router.post('/user/delete-todo',userController.postDeleteTodo );

module.exports=router;

//sagar