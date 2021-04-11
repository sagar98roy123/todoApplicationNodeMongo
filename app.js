const express=require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app=express();
const db = require('./util/database').getDb;

const mongoConnect =require('./util/database').mongoConnect;

const userRoutes= require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');
app.set('views','views');

app.use('',userRoutes);

mongoConnect(()=>{
    app.listen(3000);
});