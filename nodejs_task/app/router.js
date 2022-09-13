const router = require("express").Router();
const student = require('/home/tectoro/Desktop/nodejs_task/app/controller/student.js');
const adress = require('/home/tectoro/Desktop/nodejs_task/app/controller/adress.js');
const { address } = require("./entities/Adress");
 
router.post('/add',student.add);
router.post('/adress',adress.add);
router.get('/get',student.getall);

module.exports=router
