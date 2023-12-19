const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    // res.header('Access-Control-Allow-Origin', 'http://localhost:5175');
    let id = req.query.id;
    res.send(data.products[id-1])
});


module.exports=router;