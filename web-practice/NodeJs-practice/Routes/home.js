const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{ //this / represents localhost:3000 url (typing into browser) 
    res.send('hello main page')
})

module.exports = router;

