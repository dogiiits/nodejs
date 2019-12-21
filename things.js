var express = require('express');
var router = express.Router();

router.get('/hello',function(req,res){
	res.send("hello world");
});

router.get('/',function(req,res){
	res.send('get route on things');
});

router.post('/',function(req,res){

	res.send('Post world');
});
module.exports = router;
