//backend server.js

const express = require('express');
const bodyParser = require('body-parser');  
const cors = require('cors');

const authRoutes = require('./routes/auth');
const exerciseRoutes = require('./routes/exercises');
const progressRoutes = require('./routes/progress');

const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());        
app.use(bodyParser.json());

app.use('/api/auth',authRoutes);
app.use('/api/exercises',exerciseRoutes);
app.use('/api/progress',progressRoutes);

app.get('/',(req,res)=>{
    res.send('TechLearn Backend is running.');
});

//starting the server
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
    
});
