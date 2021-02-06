const express=require('express');
const bodyParser=require('body-parser');
const{ mongoose}= require('./db');
const cors=require('cors');

const employeeController=require('./controllers/employeeController');

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented:false}));
app.use(cors({origin:'http://localhost:4200'}));


const port=process.env.PORT||'3000';
app.listen(port,()=>console.log(`Running on localhost:${port}`));

app.use('/employees',employeeController)